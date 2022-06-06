<?php

namespace App\Entity;

use App\Repository\BranchRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BranchRepository::class)]
class Branch
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    private $name;

    #[ORM\Column(type: 'boolean')]
    private $isPrivate;

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private $isInformational = false;

    #[ORM\Column(type: 'datetime')]
    private $creationDate;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $archivingDate;

    #[ORM\ManyToOne(targetEntity: ChannelUser::class, inversedBy: 'branches')]
    #[ORM\JoinColumn(nullable: false)]
    private $creator;

    #[ORM\ManyToOne(targetEntity: Channel::class, inversedBy: 'branches')]
    #[ORM\JoinColumn(nullable: false)]
    private $channel;

    #[ORM\OneToMany(mappedBy: 'branch', targetEntity: BranchMessage::class)]
    private $branchMessages;

    #[ORM\ManyToMany(targetEntity: Tag::class, mappedBy: 'branch')]
    private $tags;

    #[ORM\OneToMany(mappedBy: 'branch', targetEntity: BranchChannelUser::class, orphanRemoval: true)]
    private $branchChannelUsers;

    public function __construct()
    {
        $this->branchMessages = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->channelUsers = new ArrayCollection();
        $this->branchChannelUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getIsPrivate(): ?bool
    {
        return $this->isPrivate;
    }

    public function setIsPrivate(bool $isPrivate): self
    {
        $this->isPrivate = $isPrivate;

        return $this;
    }

    public function getIsInformational(): ?bool
    {
        return $this->isInformational;
    }

    public function setIsInformational(bool $isInformational): self
    {
        $this->isInformational = $isInformational;

        return $this;
    }

    public function getCreationDate(): ?\DateTimeInterface
    {
        return $this->creationDate;
    }

    public function setCreationDate(\DateTimeInterface $creationDate): self
    {
        $this->creationDate = $creationDate;

        return $this;
    }

    public function getArchivingDate(): ?\DateTimeInterface
    {
        return $this->archivingDate;
    }

    public function setArchivingDate(?\DateTimeInterface $archivingDate): self
    {
        $this->archivingDate = $archivingDate;

        return $this;
    }

    public function getCreator(): ?ChannelUser
    {
        return $this->creator;
    }

    public function setCreator(?ChannelUser $creator): self
    {
        $this->creator = $creator;

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
            $branchMessage->setBranch($this);
        }

        return $this;
    }

    public function removeBranchMessage(BranchMessage $branchMessage): self
    {
        if ($this->branchMessages->removeElement($branchMessage)) {
            // set the owning side to null (unless already changed)
            if ($branchMessage->getBranch() === $this) {
                $branchMessage->setBranch(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Tag>
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
            $tag->addBranch($this);
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tags->removeElement($tag)) {
            $tag->removeBranch($this);
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
            $branchChannelUser->setBranch($this);
        }

        return $this;
    }

    public function removeBranchChannelUser(BranchChannelUser $branchChannelUser): self
    {
        if ($this->branchChannelUsers->removeElement($branchChannelUser)) {
            // set the owning side to null (unless already changed)
            if ($branchChannelUser->getBranch() === $this) {
                $branchChannelUser->setBranch(null);
            }
        }

        return $this;
    }
}
