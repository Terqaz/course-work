<?php

namespace App\Controller;

use App\Entity\User;
use App\InterfaceEntity\MessageProvider;
use App\Repository\BranchRepository;
use App\Repository\ChannelRepository;
use App\Repository\DialogMessageRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

#[IsGranted('ROLE_USER')]
#[Route('/messenger')]
class MessengerController extends AbstractController
{
    private Security $security;

    public function __construct(Security $security)
    {
        // Avoid calling getUser() in the constructor: auth may not
        // be complete yet. Instead, store the entire Security object.
        $this->security = $security;
    }

    #[Route('/', name: 'app_message_provider_index', methods: ['GET'])]
    public function getMessageProviders(Request                 $request,
                                        ChannelRepository       $channelRepository,
                                        BranchRepository        $branchRepository,
                                        DialogMessageRepository $dialogMessageRepository
    ): Response
    {
//        if ($request->query->has('channel_id')) {
////            $branchRepository-> //TODO
////            return
//        }

        /** @var User $user */
        $user = $this->security->getUser();

        $messageProviders = [];

//        $channelRepository->getNewMessagesInfo($user->getId());
        $messagesCount = $channelRepository->getNewMessagesCount($user->getId());
        foreach ($messagesCount as $item) {
            $messageProvider = (new MessageProvider())
                ->setType('channel')
                ->setId($item['channelId'])
                ->setName($item['channelName'])
                ->setNewMessagesCount($item['messagesCount']);
            $messageProviders[] = $messageProvider;
        }
        $messagesCount = $dialogMessageRepository->getNewMessagesCount($user->getId());
//        $lastMessage = $dialogMessageRepository->getLastMessageInfo($user->getId());
        foreach ($messagesCount as $item) {
            $messageProvider = (new MessageProvider())
                ->setType('dialog')
                ->setId($item['userId'])
                ->setName($item['userName'])
                ->setNewMessagesCount($item['messagesCount']);
            $messageProviders[] = $messageProvider;
        }

        return $this->render('messenger/show.html.twig', [
            'messageProviders' => $messageProviders,
        ]);
    }
}