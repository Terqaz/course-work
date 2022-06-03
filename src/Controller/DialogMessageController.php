<?php

namespace App\Controller;

use App\Entity\DialogMessage;
use App\Form\DialogMessageType;
use App\Repository\DialogMessageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/message_provider/messages')]
class DialogMessageController extends AbstractController
{
    #[Route('/', name: 'app_dialog_message_index', methods: ['GET'])]
    public function index(DialogMessageRepository $dialogMessageRepository): Response
    {
        return $this->render('dialog_message/index.html.twig', [
            'dialog_messages' => $dialogMessageRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_dialog_message_new', methods: ['GET', 'POST'])]
    public function new(Request $request, DialogMessageRepository $dialogMessageRepository): Response
    {
        $dialogMessage = new DialogMessage();
        $form = $this->createForm(DialogMessageType::class, $dialogMessage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $dialogMessageRepository->add($dialogMessage, true);

            return $this->redirectToRoute('app_dialog_message_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('dialog_message/new.html.twig', [
            'dialog_message' => $dialogMessage,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_dialog_message_show', methods: ['GET'])]
    public function show(DialogMessage $dialogMessage): Response
    {
        return $this->render('dialog_message/show.html.twig', [
            'dialog_message' => $dialogMessage,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_dialog_message_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, DialogMessage $dialogMessage, DialogMessageRepository $dialogMessageRepository): Response
    {
        $form = $this->createForm(DialogMessageType::class, $dialogMessage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $dialogMessageRepository->add($dialogMessage, true);

            return $this->redirectToRoute('app_dialog_message_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('dialog_message/edit.html.twig', [
            'dialog_message' => $dialogMessage,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_dialog_message_delete', methods: ['POST'])]
    public function delete(Request $request, DialogMessage $dialogMessage, DialogMessageRepository $dialogMessageRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$dialogMessage->getId(), $request->request->get('_token'))) {
            $dialogMessageRepository->remove($dialogMessage, true);
        }

        return $this->redirectToRoute('app_dialog_message_index', [], Response::HTTP_SEE_OTHER);
    }
}
