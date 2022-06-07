<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private $email;

    #[ORM\Column(type: 'json')]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    private $password;

    #[ORM\Column(type: 'string', length: 50)]
    private $lastName;

    #[ORM\Column(type: 'string', length: 50)]
    private $firstName;

    #[ORM\Column(type: 'string', length: 50, nullable: false)]
    private $middleName = '';

    #[ORM\Column(type: 'date', nullable: true)]
    private $birthDate;

    #[ORM\Column(type: 'string', length: 16, nullable: true)]
    private $phone;

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    private $isOnline;

    #[ORM\OneToMany(mappedBy: 'userData', targetEntity: ChannelUser::class)]
    private $channelUsers;

    #[ORM\OneToMany(mappedBy: 'sender', targetEntity: DialogMessage::class)]
    private $dialogMessages;

    #[ORM\OneToMany(mappedBy: 'creator', targetEntity: Tag::class)]
    private $tags;

    public function __construct()
    {
        $this->channelUsers = new ArrayCollection();
        $this->dialogMessages = new ArrayCollection();
        $this->tags = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getMiddleName(): ?string
    {
        return $this->middleName;
    }

    public function setMiddleName(?string $middleName): self
    {
        $this->middleName = $middleName;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birthDate;
    }

    public function setBirthDate(?\DateTimeInterface $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function isIsOnline(): ?bool
    {
        return $this->isOnline;
    }

    public function setIsOnline(bool $isOnline): self
    {
        $this->isOnline = $isOnline;

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
            $channelUser->setUserData($this);
        }

        return $this;
    }

    public function removeChannelUser(ChannelUser $channelUser): self
    {
        if ($this->channelUsers->removeElement($channelUser)) {
            // set the owning side to null (unless already changed)
            if ($channelUser->getUserData() === $this) {
                $channelUser->setUserData(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, DialogMessage>
     */
    public function getDialogMessages(): Collection
    {
        return $this->dialogMessages;
    }

    public function addDialogMessage(DialogMessage $dialogMessage): self
    {
        if (!$this->dialogMessages->contains($dialogMessage)) {
            $this->dialogMessages[] = $dialogMessage;
            $dialogMessage->setSender($this);
        }

        return $this;
    }

    public function removeDialogMessage(DialogMessage $dialogMessage): self
    {
        if ($this->dialogMessages->removeElement($dialogMessage)) {
            // set the owning side to null (unless already changed)
            if ($dialogMessage->getSender() === $this) {
                $dialogMessage->setSender(null);
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
            $tag->setUserData($this);
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tags->removeElement($tag)) {
            // set the owning side to null (unless already changed)
            if ($tag->getUserData() === $this) {
                $tag->setUserData(null);
            }
        }

        return $this;
    }
}
