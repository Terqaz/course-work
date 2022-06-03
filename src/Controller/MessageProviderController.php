<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\BranchRepository;
use App\Repository\ChannelRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

#[Route('/messenger')]
class MessageProviderController extends AbstractController
{
    private Security $security;

    public function __construct(Security $security)
    {
        // Avoid calling getUser() in the constructor: auth may not
        // be complete yet. Instead, store the entire Security object.
        $this->security = $security;
    }

    #[Route('/', name: 'app_message_provider_index', methods: ['GET'])]
    public function dialogs(Request $request, ChannelRepository $channelRepository, BranchRepository $branchRepository): Response
    {
        if ($request->query->has('channel_id')) {
//            $branchRepository-> //TODO
//            return
        }

        /** @var User $user */
        $user = $this->security->getUser();

        dd($channelRepository->getNewMessagesInfo($user->getId()));
    }
}