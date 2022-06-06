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
        $this->security = $security;
    }

    #[Route('/', name: 'app_message_provider_index', methods: ['GET'])]
    public function getMessageProviders(Request                 $request,
                                        ChannelRepository       $channelRepository,
                                        BranchRepository        $branchRepository,
                                        DialogMessageRepository $dialogMessageRepository
    ): Response
    {
        /** @var User $user */
        $user = $this->security->getUser();

        $userChannels = $channelRepository->getUserChannels($user->getId());
        $messagesCount = $channelRepository->getNewMessagesInfo($user->getId());

        $messageProviders = [];
        foreach ($userChannels as $item) {
            $messageProvider = (new MessageProvider())
                ->setType('channel')
                ->setId($item['id'])
                ->setName($item['name'])
                ->setIsPrivate($item['isPrivate']);

            if (isset($messagesCount['channelId'])) {
                $messageProvider->setNewMessagesCount($messagesCount['channelId']);
            }

            $branchesData = $branchRepository->getUserBranches($user->getId(), $item['id']);

            $branches = [];
            foreach ($branchesData as $branchData) {
                $branch = (new MessageProvider())
                    ->setType('branch')
                    ->setId($branchData['id'])
                    ->setName($branchData['name'])
                    ->setIsPrivate($branchData['isPrivate'])
                    ->setIsInformational($branchData['isInformational']);
//            if (isset($item['messagesCount'])) {
//                $messageProvider->setNewMessagesCount($item['messagesCount']);
//            }

                $branches[] = $branch;
            }
            $messageProvider->setBranches($branches);

            $messageProviders[] = $messageProvider;
        }
        $userDialogs = $dialogMessageRepository->getUserDialogs($user->getId());
        $messagesCount = $dialogMessageRepository->getNewMessagesInfo($user->getId());
        foreach ($userDialogs as $item) {
            $messageProvider = (new MessageProvider())
                ->setType('dialog')
                ->setId($item['userId'])
                ->setName($item['userName']);
            if (isset($messagesCount['userId'])) {
                $messageProvider->setNewMessagesCount($messagesCount['userId']);
            }
            $messageProviders[] = $messageProvider;
        }

        return $this->render('messenger/show.html.twig', [
            'messageProviders' => $messageProviders,

        ]);
    }
}