<?php

namespace App\Entity;

use App\Repository\BranchChannelUserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BranchChannelUserRepository::class)]
class BranchChannelUser
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: ChannelUser::class, inversedBy: 'branchChannelUsers')]
    #[ORM\JoinColumn(nullable: false)]
    private $channelUser;

    #[ORM\ManyToOne(targetEntity: Branch::class, inversedBy: 'branchChannelUsers')]
    #[ORM\JoinColumn(nullable: false)]
    private $branch;

    #[ORM\Column(type: 'datetime')]
    private $lastSeenDate;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChannelUser(): ?ChannelUser
    {
        return $this->channelUser;
    }

    public function setChannelUser(?ChannelUser $channelUser): self
    {
        $this->channelUser = $channelUser;

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

    public function getLastSeenDate(): ?\DateTimeInterface
    {
        return $this->lastSeenDate;
    }

    public function setLastSeenDate(\DateTimeInterface $lastSeenDate): self
    {
        $this->lastSeenDate = $lastSeenDate;

        return $this;
    }
}
