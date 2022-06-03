<?php

namespace App\Controller;

use App\Entity\ChannelUser;
use App\Form\ChannelUserType;
use App\Repository\ChannelUserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/channel/users')]
class ChannelUserController extends AbstractController
{
    #[Route('/', name: 'app_channel_user_index', methods: ['GET'])]
    public function index(ChannelUserRepository $channelUserRepository): Response
    {
        return $this->render('channel_user/show.html.twig', [
            'channel_users' => $channelUserRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_channel_user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ChannelUserRepository $channelUserRepository): Response
    {
        $channelUser = new ChannelUser();
        $form = $this->createForm(ChannelUserType::class, $channelUser);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $channelUserRepository->add($channelUser, true);

            return $this->redirectToRoute('app_channel_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('channel_user/new.html.twig', [
            'channel_user' => $channelUser,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_channel_user_show', methods: ['GET'])]
    public function show(ChannelUser $channelUser): Response
    {
        return $this->render('channel_user/show.html.twig', [
            'channel_user' => $channelUser,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_channel_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ChannelUser $channelUser, ChannelUserRepository $channelUserRepository): Response
    {
        $form = $this->createForm(ChannelUserType::class, $channelUser);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $channelUserRepository->add($channelUser, true);

            return $this->redirectToRoute('app_channel_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('channel_user/edit.html.twig', [
            'channel_user' => $channelUser,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_channel_user_delete', methods: ['POST'])]
    public function delete(Request $request, ChannelUser $channelUser, ChannelUserRepository $channelUserRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$channelUser->getId(), $request->request->get('_token'))) {
            $channelUserRepository->remove($channelUser, true);
        }

        return $this->redirectToRoute('app_channel_user_index', [], Response::HTTP_SEE_OTHER);
    }
}
