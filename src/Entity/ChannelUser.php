<?php

namespace App\Entity;

use App\Repository\ChannelUserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChannelUserRepository::class)]
class ChannelUser
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'datetime')]
    private $entryDate;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'channelUsers')]
    #[ORM\JoinColumn(nullable: false)]
    private $userData;

    #[ORM\OneToMany(mappedBy: 'creator', targetEntity: Branch::class)]
    private $createdBranches;

    #[ORM\OneToMany(mappedBy: 'sender', targetEntity: BranchMessage::class)]
    private $branchMessages;

    #[ORM\OneToMany(mappedBy: 'channelUser', targetEntity: BranchChannelUser::class)]
    private $branchChannelUsers;

    #[ORM\ManyToOne(targetEntity: Channel::class, inversedBy: 'channelUsers')]
    #[ORM\JoinColumn(nullable: true)]
    private $channel;

    public function __construct()
    {
        $this->branches = new ArrayCollection();
        $this->branchMessages = new ArrayCollection();
        $this->branchChannelUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEntryDate(): ?\DateTimeInterface
    {
        return $this->entryDate;
    }

    public function setEntryDate(\DateTimeInterface $entryDate): self
    {
        $this->entryDate = $entryDate;

        return $this;
    }

    public function getUserData(): ?User
    {
        return $this->userData;
    }

    public function setUserData(?User $userData): self
    {
        $this->userData = $userData;

        return $this;
    }

    /**
     * @return Collection<int, Branch>
     */
    public function getCreatedBranches(): Collection
    {
        return $this->createdBranches;
    }

    public function addCreatedBranch(Branch $createdBranch): self
    {
        if (!$this->createdBranches->contains($createdBranch)) {
            $this->createdBranches[] = $createdBranch;
            $createdBranch->setCreator($this);
        }

        return $this;
    }

    public function removeCreatedBranch(Branch $createdBranch): self
    {
        if ($this->createdBranches->removeElement($createdBranch)) {
            // set the owning side to null (unless already changed)
            if ($createdBranch->getCreator() === $this) {
                $createdBranch->setCreator(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, BranchMessage>
     */
    public function getBranchMessages(): Collection
    {
        return $this->branchMessages;
    }

    public function addBranchMessage(BranchMessage $branchMessage): self
    {
        if (!$this->branchMessages->contains($branchMessage)) {
            $this->branchMessages[] = $branchMessage;
            $branchMessage->setSender($this);
        }

        return $this;
    }

    public function removeBranchMessage(BranchMessage $branchMessage): self
    {
        if ($this->branchMessages->removeElement($branchMessage)) {
            // set the owning side to null (unless already changed)
            if ($branchMessage->getSender() === $this) {
                $branchMessage->setSender(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, BranchChannelUser>
     */
    public function getBranchChannelUsers(): Collection
    {
        return $this->branchChannelUsers;
    }

    public function addBranchChannelUser(BranchChannelUser $branchChannelUser): self
    {
        if (!$this->branchChannelUsers->contains($branchChannelUser)) {
            $this->branchChannelUsers[] = $branchChannelUser;
            $branchChannelUser->setChannelUser($this);
        }

        return $this;
    }

    public function removeBranchChannelUser(BranchChannelUser $branchChannelUser): self
    {
        if ($this->branchChannelUsers->removeElement($branchChannelUser)) {
            // set the owning side to null (unless already changed)
            if ($branchChannelUser->getChannelUser() === $this) {
                $branchChannelUser->setChannelUser(null);
            }
        }

        return $this;
    }

    public function getChannel(): ?Channel
    {
        return $this->channel;
    }

    public function setChannel(?Channel $channel): self
    {
        $this->channel = $channel;

        return $this;
    }
}
