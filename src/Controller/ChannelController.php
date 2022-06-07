<?php

namespace App\Controller;

use App\Entity\Channel;
use App\Entity\ChannelUser;
use App\Entity\User;
use App\Form\ChannelType;
use App\InterfaceEntity\MessageProvider;
use App\Repository\BranchChannelUserRepository;
use App\Repository\BranchMessageRepository;
use App\Repository\BranchRepository;
use App\Repository\ChannelRepository;
use App\Repository\ChannelUserRepository;
use App\Repository\TagRepository;
use DateInterval;
use DateTime;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Knp\Snappy\Pdf;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

#[IsGranted('ROLE_USER')]
#[Route('/channels')]
class ChannelController extends AbstractController
{
    private Security $security;

    public function __construct(Security $security)
    {
        // Avoid calling getUser() in the constructor: auth may not
        // be complete yet. Instead, store the entire Security object.
        $this->security = $security;
    }

    #[Route('/', name: 'app_channel_index', methods: ['GET'])]
    public function index(Request $request, ChannelRepository $channelRepository, TagRepository $tagRepository): Response
    {
        $query = $request->query->get('q');
        if ($query) {
            $channels = $channelRepository->findByQuery($query);
        } else {
            $channels = $channelRepository->findAll();
        }

        $userChannels = $channelRepository->getUserChannels($this->security->getUser()->getId());
        $userIsInChannel = [];
        foreach ($userChannels as $channel) {
            $userIsInChannel[$channel['id']] = true;
        }

        $channelPublicTags = [];
        foreach ($channels as $channel) {
            $channelPublicTags[$channel->getId()] = $tagRepository->findChannelPublic($channel->getId());
        }

        return $this->render('channel/index.html.twig', [
            'channels' => $channels,
            'userIsInChannel' => $userIsInChannel,
            'channelPublicTags' => $channelPublicTags,
            'query' => $query,
        ]);
    }

    #[Route('/new', name: 'app_channel_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ChannelRepository $channelRepository, ChannelUserRepository $channelUserRepository): Response
    {
        /** @var User $user */
        $user = $this->security->getUser();

        $channel = new Channel();

        $form = $this->createForm(ChannelType::class, $channel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $channelRepository->add($channel);

            $channelUser = (new ChannelUser())
                ->setUserData($user)
                ->setEntryDate(new DateTime());
            $channelUserRepository->add($channelUser);
            $channel->setCreator($channelUser);
            $channel->addChannelUser($channelUser);

            $channelRepository->add($channel, true);

            return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('channel/new.html.twig', [
            'channel' => $channel,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_channel_show', methods: ['GET'])]
    public function show(Channel $channel, BranchRepository $branchRepository, ChannelUserRepository $channelUserRepository, BranchChannelUserRepository $branchChannelUserRepository): Response
    {
        $channelUser = $channelUserRepository->findByUserAndChannel($this->security->getUser()->getId(), $channel->getId());

        $branchChannelUsers = $branchChannelUserRepository->findBy([
            'channelUser' => $channelUser->getId(),
        ]);

        $isUserInBranch = [];
        foreach ($branchChannelUsers as $branchChannelUser) {
            $isUserInBranch[$branchChannelUser->getBranch()->getId()] = true;
        }

        return $this->render('channel/show.html.twig', [
            'channel' => $channel,
            'channelUserId' => $channelUser->getId(),
            'branches' => $branchRepository->findBy(['channel' => $channel->getId()]),
            'isUserInBranch' => $isUserInBranch,
        ]);
    }

    #[Route('/{id}/join', name: 'app_channel_join', methods: ['GET'])]
    public function join(Request $request, Channel $channel, ChannelUserRepository $channelUserRepository): Response
    {
        $channelUser = new ChannelUser();
        $channelUser
            ->setChannel($channel)
            ->setUserData($this->security->getUser())
            ->setEntryDate(new DateTime());
        $channelUserRepository->add($channelUser, true);

        $query = $request->query->get('q');
        if ($query) {
            return $this->redirectToRoute('app_channel_index', ['q' => $query], Response::HTTP_SEE_OTHER);
        } else {
            return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
        }
    }

    #[Route('/{id}/branches', name: 'app_channel_branches', methods: ['GET'])]
    public function getBranches(Channel $channel, BranchRepository $branchRepository): Response
    {
        /** @var User $user */
        $user = $this->security->getUser();

        $messageProviders = [];

//        $channelRepository->getNewMessagesInfo($user->getId());
        $userBranches = $branchRepository->getUserBranches($user->getId());
        foreach ($userBranches as $item) {
            $messageProvider = (new MessageProvider())
                ->setType('branch')
                ->setId($item['branchId'])
                ->setName($item['branchName']);
//            if (isset($item['messagesCount'])) {
//                $messageProvider->setNewMessagesCount($item['messagesCount']);
//            }

            $messageProviders[] = $messageProvider;
        }
        return $this->render('branch/index.html.twig', [
            'branches' => $messageProviders,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_channel_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Channel $channel, ChannelRepository $channelRepository): Response
    {
        $form = $this->createForm(ChannelType::class, $channel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $channelRepository->add($channel, true);

            return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('channel/edit.html.twig', [
            'channel' => $channel,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/report', name: 'app_channel_show_report', methods: ['GET', 'POST'])]
    public function report(Request                 $request,
                           Channel                 $channel,
                           BranchRepository        $branchRepository,
                           BranchMessageRepository $branchMessageRepository,
                           Pdf                     $knpSnappyPdf)
    : RedirectResponse|PdfResponse
    {
        $interval = $request->query->get('t');

        $branches = $branchRepository->findBy(['channel' => $channel->getId()]);
        $branchesMessages = [];
        if ($interval == 'd') {
            $header = 'Сообщения за день';
        } else if ($interval == 'm') {
            $header = 'Сообщения за месяц';
        } else if ($interval == 'y') {
            $header = 'Сообщения за год';
        } else {
            return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
        }
        $interval = strtoupper($interval);
        $header .= " (c " . (new DateTime())->sub(new DateInterval('P1' . $interval))->format('H:i:s d.m.Y')
            . ' по ' . (new DateTime())->format('H:i:s d.m.Y') . ')';
        foreach ($branches as $branch) {
            $branchesMessages[$branch->getId()] =
                $branchMessageRepository->getByBranchIdAndIntervalName($branch->getId(), $interval);
        }

        $html = $this->renderView('branch_message/report.html.twig', [
            'header' => $header,
            'branches' => $branches,
            'branchesMessages' => $branchesMessages,
        ]);

        $knpSnappyPdf->setOption('encoding', 'utf-8');
        return new PdfResponse(
            $knpSnappyPdf->getOutputFromHtml($html),
            'Report.pdf',
        );
    }

    #[Route('/{id}', name: 'app_channel_delete', methods: ['POST'])]
    public function delete(Request $request, Channel $channel, ChannelRepository $channelRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$channel->getId(), $request->request->get('_token'))) {
            $channelRepository->remove($channel, true);
        }

        return $this->redirectToRoute('app_channel_index', [], Response::HTTP_SEE_OTHER);
    }
}
