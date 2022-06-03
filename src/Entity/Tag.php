<?php

namespace App\Entity;

use App\Repository\TagRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TagRepository::class)]
class Tag
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 40)]
    private $name;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'tags')]
    private $userData;

    #[ORM\ManyToMany(targetEntity: Message::class, inversedBy: 'tags')]
    private $message;

    #[ORM\ManyToMany(targetEntity: Branch::class, inversedBy: 'tags')]
    private $branch;

    #[ORM\ManyToMany(targetEntity: Channel::class, inversedBy: 'tags')]
    private $channel;


    public function __construct()
    {
        $this->message = new ArrayCollection();
        $this->branch = new ArrayCollection();
        $this->channel = new ArrayCollection();
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
     * @return Collection<int, Message>
     */
    public function getMessage(): Collection
    {
        return $this->message;
    }

    public function addMessage(Message $message): self
    {
        if (!$this->message->contains($message)) {
            $this->message[] = $message;
        }

        return $this;
    }

    public function removeMessage(Message $message): self
    {
        $this->message->removeElement($message);

        return $this;
    }

    /**
     * @return Collection<int, Branch>
     */
    public function getBranch(): Collection
    {
        return $this->branch;
    }

    public function addBranch(Branch $branch): self
    {
        if (!$this->branch->contains($branch)) {
            $this->branch[] = $branch;
        }

        return $this;
    }

    public function removeBranch(Branch $branch): self
    {
        $this->branch->removeElement($branch);

        return $this;
    }

    /**
     * @return Collection<int, Channel>
     */
    public function getChannel(): Collection
    {
        return $this->channel;
    }

    public function addChannel(Channel $channel): self
    {
        if (!$this->channel->contains($channel)) {
            $this->channel[] = $channel;
        }

        return $this;
    }

    public function removeChannel(Channel $channel): self
    {
        $this->channel->removeElement($channel);

        return $this;
    }
}
