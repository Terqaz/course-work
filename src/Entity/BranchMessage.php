<?php

namespace App\Entity;

use App\Repository\BranchMessageRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BranchMessageRepository::class)]
class BranchMessage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: ChannelUser::class, inversedBy: 'branchMessages')]
    #[ORM\JoinColumn(nullable: false)]
    private $sender;

    #[ORM\ManyToOne(targetEntity: Branch::class, inversedBy: 'branchMessages')]
    #[ORM\JoinColumn(nullable: false)]
    private $branch;

    #[ORM\OneToOne(targetEntity: Message::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[ORM\JoinColumn(nullable: false)]
    private $message;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSender(): ?ChannelUser
    {
        return $this->sender;
    }

    public function setSender(?ChannelUser $sender): self
    {
        $this->sender = $sender;

        return $this;
    }

    public function getBranch(): ?Branch
    {
        return $this->branch;
    }

    public function setBranch(?Branch $branch): self
    {
        $this->branch = $branch;

        return $this;
    }

    public function getMessage(): ?Message
    {
        return $this->message;
    }

    public function setMessage(Message $message): self
    {
        $this->message = $message;

        return $this;
    }
}
