<?php

namespace App\Controller;

use App\Entity\BranchMessage;
use App\Form\BranchMessageType;
use App\Repository\BranchMessageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/branch/messages')]
class BranchMessageController extends AbstractController
{
    #[Route('/', name: 'app_branch_message_index', methods: ['GET'])]
    public function index(BranchMessageRepository $branchMessageRepository): Response
    {
        return $this->render('branch_message/show.html.twig', [
            'branch_messages' => $branchMessageRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_branch_message_new', methods: ['GET', 'POST'])]
    public function new(Request $request, BranchMessageRepository $branchMessageRepository): Response
    {
        $branchMessage = new BranchMessage();
        $form = $this->createForm(BranchMessageType::class, $branchMessage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $branchMessageRepository->add($branchMessage, true);

            return $this->redirectToRoute('app_branch_message_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('branch_message/new.html.twig', [
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
