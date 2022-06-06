<?php

namespace App\Controller;

use App\Entity\BranchMessage;
use App\Entity\Message;
use App\Entity\User;
use App\Form\BranchMessageType;
use App\Repository\BranchMessageRepository;
use App\Repository\BranchRepository;
use App\Repository\ChannelUserRepository;
use DateTime;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

#[IsGranted('ROLE_USER')]
#[Route('/branch/messages')]
class BranchMessageController extends AbstractController
{
    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    #[Route('/', name: 'app_branch_message_index', methods: ['GET'])]
    public function index(BranchMessageRepository $branchMessageRepository): Response
    {
        return $this->render('branch_message/show.html.twig', [
            'branch_messages' => $branchMessageRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_branch_message_new', methods: ['GET', 'POST'])]
    public function new(Request                 $request,
                        BranchMessageRepository $branchMessageRepository,
                        BranchRepository        $branchRepository,
                        ChannelUserRepository   $channelUserRepository)
    : Response
    {
        /** @var User $user */
        $user = $this->security->getUser();

        $branchMessage = new BranchMessage();
        $channelUserId = 0;

        $branchId = (int)$request->query->get('branch-id');
        if ($branchId) {
            $branch = $branchRepository->find($branchId);
            $channelUser = $channelUserRepository->findByUserAndBranch($user->getId(), $branchId);
            $branchMessage
                ->setSender($channelUser)
                ->setBranch($branch);
            $channelUserId = $channelUser->getId();
        }
        $form = $this->createForm(BranchMessageType::class, $branchMessage, [
            'action' => $this->generateUrl('app_branch_message_new'),
            'branch-id' => $branchId,
            'channel-user-id' => $channelUserId
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $message = (new Message())
                ->setText($form->get('text')->getData())
                ->setCreationDate(new DateTime());
            $branch = $branchRepository->find((int) $form->get('branch-id')->getData());
            $channelUser = $channelUserRepository->find((int) $form->get('channel-user-id')->getData());

            $branchMessage
                ->setSender($channelUser)
                ->setBranch($branch)
                ->setMessage($message);

            $branchMessageRepository->add($branchMessage, true);

            return new Response(status: 200);
        }

        return $this->renderForm('branch_message/_form.html.twig', [
            'branch' => $branch,
            'branch_message' => $branchMessage,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_branch_message_show', methods: ['GET'])]
    public function show(BranchMessage $branchMessage): Response
    {
        return $this->render('branch_message/show.html.twig', [
            'branch_message' => $branchMessage,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_branch_message_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, BranchMessage $branchMessage, BranchMessageRepository $branchMessageRepository): Response
    {
        $form = $this->createForm(BranchMessageType::class, $branchMessage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $branchMessageRepository->add($branchMessage, true);

            return $this->redirectToRoute('app_branch_message_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('branch_message/edit.html.twig', [
            'branch_message' => $branchMessage,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_branch_message_delete', methods: ['POST'])]
    public function delete(Request $request, BranchMessage $branchMessage, BranchMessageRepository $branchMessageRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$branchMessage->getId(), $request->request->get('_token'))) {
            $branchMessageRepository->remove($branchMessage, true);
        }

        return $this->redirectToRoute('app_branch_message_index', [], Response::HTTP_SEE_OTHER);
    }
}
