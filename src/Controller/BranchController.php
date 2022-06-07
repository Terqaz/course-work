<?php

namespace App\Controller;

use App\Entity\Branch;
use App\Entity\BranchChannelUser;
use App\Entity\Channel;
use App\Entity\User;
use App\Form\BranchType;
use App\Repository\BranchChannelUserRepository;
use App\Repository\BranchMessageRepository;
use App\Repository\BranchRepository;
use App\Repository\ChannelRepository;
use App\Repository\ChannelUserRepository;
use DateTime;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

#[IsGranted('ROLE_USER')]
#[Route('/branches')]
class BranchController extends AbstractController
{
    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    #[Route('/', name: 'app_branch_index', methods: ['GET'])]
    public function index(BranchRepository $branchRepository): Response
    {
        return $this->render('branch/index.html.twig', [
            'branches' => $branchRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_branch_new', methods: ['GET', 'POST'])]
    public function new(Request                     $request,
                        BranchRepository            $branchRepository,
                        ChannelRepository           $channelRepository,
                        ChannelUserRepository       $channelUserRepository,
                        BranchChannelUserRepository $branchChannelUserRepository)
    : Response
    {
        $channelId = (int) $request->query->get('channel-id');
        /** @var Channel $channel */
        $channel = $channelRepository->find($channelId);
        /** @var User $user */
        $user = $this->security->getUser();
        $channelUser = $channelUserRepository->findByUserAndChannel($user->getId(), $channelId);

        $branch = new Branch();
        $branch
            ->setCreator($channelUser)
            ->setChannel($channel);
        $form = $this->createForm(BranchType::class, $branch, [
            'channel-id' => $channelId
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $channel = $channelRepository->find($form->get('channelId')->getData());

            $branch
                ->setCreator($channelUser)
                ->setChannel($channel)
                ->setCreationDate(new DateTime())
            ;

            $branchRepository->add($branch);

            $branchChannelUser = new BranchChannelUser();
            $branchChannelUser
                ->setChannelUser($channelUser)
                ->setLastSeenDate(new DateTime());

            $branchChannelUserRepository->add($branchChannelUser);
            $branch->addBranchChannelUser($branchChannelUser);

            $branchRepository->add($branch, true);

            return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('branch/new.html.twig', [
            'branch' => $branch,
            'form' => $form,
            'channel' => $channel
        ]);
    }

    #[Route('/{id}', name: 'app_branch_show', methods: ['GET'])]
    public function show(Branch $branch): Response
    {
        return $this->render('branch/show.html.twig', [
            'branch' => $branch,
        ]);
    }

    #[Route('/{id}/users/new', name: 'app_branch_users_new', methods: ['GET', 'POST'])]
    public function newUser(Branch                      $branch,
                            ChannelUserRepository       $channelUserRepository,
                            BranchChannelUserRepository $branchChannelUserRepository)
    : Response
    {
        /** @var User $user */
        $user = $this->security->getUser();

        $channelUser = $channelUserRepository->findByUserAndBranch($user->getId(), $branch->getId());

        $branchChannelUser = new BranchChannelUser();
        $branchChannelUser
            ->setChannelUser($channelUser)
            ->setBranch($branch)
            ->setLastSeenDate(new DateTime());

        $branchChannelUserRepository->add($branchChannelUser, true);

        return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/messages', name: 'app_branch_messages', methods: ['GET'])]
    public function getMessages(Request                     $request,
                                Branch                      $branch,
                                BranchMessageRepository     $branchMessageRepository,
                                ChannelUserRepository       $channelUserRepository,
                                BranchChannelUserRepository $branchChannelUserRepository)
    : Response
    {
        /** @var User $user */
        $user = $this->security->getUser();

        $query = $request->query->get('q');

        if (!$query) {
            $messages = $branchMessageRepository->getByBranchId($branch->getId());
        } else {
            $messages = $branchMessageRepository->getByBranchIdAndQuery($user->getId(), $branch->getId(), $query);
        }
        $channelUser = $channelUserRepository->findByUserAndBranch($user->getId(), $branch->getId());
        $branchChannelUser = $branchChannelUserRepository->findOneBy([
            'channelUser' => $channelUser->getId(),
            'branch' => $branch->getId()
        ]);

        return $this->render('branch_message/index.html.twig', [
            'messages' => $messages,
            'channelUser' => $channelUser,
            'branch' => $branch,
            'branchChannelUser' => $branchChannelUser,
            'isQuery' => strlen($query) > 0
        ]);
    }

    #[Route('/{id}/edit', name: 'app_branch_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Branch $branch, BranchRepository $branchRepository, ChannelRepository $channelRepository): Response
    {
        $form = $this->createForm(BranchType::class, $branch);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $branchRepository->add($branch, true);

            return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('branch/edit.html.twig', [
            'branch' => $branch,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/archive', name: 'app_branch_archive', methods: ['GET'])]
    public function archive(Branch $branch, BranchRepository $branchRepository): Response
    {
        $branch->setArchivingDate(new DateTime());
        $branchRepository->add($branch, true);

        return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/unarchive', name: 'app_branch_unarchive', methods: ['GET'])]
    public function unarchive(Branch $branch, BranchRepository $branchRepository): Response
    {
        $branch->setArchivingDate(null);
        $branchRepository->add($branch, true);

        return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/join', name: 'app_branch_join', methods: ['GET'])]
    public function join(Branch $branch, BranchChannelUserRepository $branchChannelUserRepository, ChannelUserRepository $channelUserRepository): Response
    {
        $branchChannelUser = new BranchChannelUser();
        $branchChannelUser
            ->setBranch($branch)
            ->setChannelUser($channelUserRepository->findByUserAndChannel(
                $this->security->getUser()->getId(),
                $branch->getChannel()->getId()
            ))
            ->setLastSeenDate(new DateTime());

        $branchChannelUserRepository->add($branchChannelUser, true);

        return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/leave', name: 'app_branch_leave', methods: ['GET'])]
    public function leave(Branch $branch, BranchChannelUserRepository $branchChannelUserRepository, ChannelUserRepository $channelUserRepository): Response
    {
        $branchChannelUser = $branchChannelUserRepository->findOneBy([
            'branch' => $branch->getId(),
            'channelUser' => $channelUserRepository->findByUserAndChannel(
                $this->security->getUser()->getId(),
                $branch->getChannel()->getId()
            )->getId(),
        ]);
        $branchChannelUserRepository->remove($branchChannelUser, true);

        return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}', name: 'app_branch_delete', methods: ['POST'])]
    public function delete(Request $request, Branch $branch, BranchRepository $branchRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$branch->getId(), $request->request->get('_token'))) {
            $branchRepository->remove($branch, true);
        }

        return $this->redirectToRoute('app_message_provider_index', [], Response::HTTP_SEE_OTHER);
    }
}
