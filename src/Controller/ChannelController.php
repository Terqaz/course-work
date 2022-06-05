<?php

namespace App\Controller;

use App\Entity\Channel;
use App\Entity\User;
use App\Form\ChannelType;
use App\InterfaceEntity\MessageProvider;
use App\Repository\BranchRepository;
use App\Repository\ChannelRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    public function index(ChannelRepository $channelRepository): Response
    {
        return $this->render('channel/show.html.twig', [
            'channels' => $channelRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_channel_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ChannelRepository $channelRepository): Response
    {
        $channel = new Channel();
        $form = $this->createForm(ChannelType::class, $channel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $channelRepository->add($channel, true);

            return $this->redirectToRoute('app_channel_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('channel/new.html.twig', [
            'channel' => $channel,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_channel_show', methods: ['GET'])]
    public function show(Channel $channel, BranchRepository $branchRepository): Response
    {
        return $this->render('channel/show.html.twig', [
            'channel' => $channel,
            'branches' => $branchRepository->findBy(['channel' => $channel->getId()])
        ]);
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

            return $this->redirectToRoute('app_channel_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('channel/edit.html.twig', [
            'channel' => $channel,
            'form' => $form,
        ]);
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
