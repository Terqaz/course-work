<?php

namespace App\Controller;

use App\Entity\DialogMessage;
use App\Entity\User;
use App\Form\DialogMessageType;
use App\Repository\DialogMessageRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

#[IsGranted('ROLE_USER')]
#[Route('/dialog/messages')]
class DialogMessageController extends AbstractController
{
    private Security $security;

    public function __construct(Security $security)
    {
        // Avoid calling getUser() in the constructor: auth may not
        // be complete yet. Instead, store the entire Security object.
        $this->security = $security;
    }

    #[Route('/', name: 'app_dialog_message_index', methods: ['GET'])]
    public function index(Request $request, DialogMessageRepository $dialogMessageRepository): Response
    {
        /** @var User $user */
        $user = $this->security->getUser();

        $otherUserId = $request->query->get('other-user-id');

        if ($otherUserId === null) {
            $dialogMessages = [];
        } else {
            $dialogMessages = $dialogMessageRepository->findByUserIds($user->getId(), (int) $otherUserId);
        }

        return $this->render('dialog_message/show.html.twig', [
            'dialog_messages' => $dialogMessages,
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
