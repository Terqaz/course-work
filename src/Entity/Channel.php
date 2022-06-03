<?php

namespace App\Entity;

use App\Repository\ChannelRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChannelRepository::class)]
class Channel
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    private $name;

    #[ORM\Column(type: 'string', length: 3000, nullable: true)]
    private $description;

    #[ORM\OneToOne(targetEntity: ChannelUser::class, cascade: ['persist', 'remove'])]
    private $creator;

    #[ORM\OneToMany(mappedBy: 'channel', targetEntity: Branch::class)]
    private $branches;

    #[ORM\ManyToMany(targetEntity: Tag::class, mappedBy: 'channel')]
    private $tags;

    #[ORM\OneToMany(mappedBy: 'channel', targetEntity: ChannelUser::class)]
    private $channelUsers;


    public function __construct()
    {
        $this->branches = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->channelUsers = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

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

    /**
     * @return Collection<int, Branch>
     */
    public function getBranches(): Collection
    {
        return $this->branches;
    }

    public function addBranch(Branch $branch): self
    {
        if (!$this->branches->contains($branch)) {
            $this->branches[] = $branch;
            $branch->setChannel($this);
        }

        return $this;
    }

    public function removeBranch(Branch $branch): self
    {
        if ($this->branches->removeElement($branch)) {
            // set the owning side to null (unless already changed)
            if ($branch->getChannel() === $this) {
                $branch->setChannel(null);
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
            $tag->addChannel($this);
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tags->removeElement($tag)) {
            $tag->removeChannel($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, ChannelUser>
     */
    public function getChannelUsers(): Collection
    {
        return $this->channelUsers;
    }

    public function addChannelUser(ChannelUser $channelUser): self
    {
        if (!$this->channelUsers->contains($channelUser)) {
            $this->channelUsers[] = $channelUser;
            $channelUser->setChannel($this);
        }

        return $this;
    }

    public function removeChannelUser(ChannelUser $channelUser): self
    {
        if ($this->channelUsers->removeElement($channelUser)) {
            // set the owning side to null (unless already changed)
            if ($channelUser->getChannel() === $this) {
                $channelUser->setChannel(null);
            }
        }

        return $this;
    }
}
