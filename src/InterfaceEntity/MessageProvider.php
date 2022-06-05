<?php

namespace App\InterfaceEntity;

// Нужен для отображения в навигационном меню
class MessageProvider
{
    private int $id;
    // 'channel', 'branch', 'messenger'
    private string $type;
    // Имя пользователя или название канала или ветки
    private string $name;
    // Для канала - сумма новых сообщений по всем веткам, в которых состоит данный пользователь
    private int $newMessagesCount = 0;
    private array $branches = [];

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return int
     */
    public function getNewMessagesCount(): int
    {
        return $this->newMessagesCount;
    }

    /**
     * @param int $newMessagesCount
     */
    public function setNewMessagesCount(int $newMessagesCount): self
    {
        $this->newMessagesCount = $newMessagesCount;

        return $this;
    }

    /**
     * @return array
     */
    public function getBranches(): array
    {
        return $this->branches;
    }

    /**
     * @param array $branches
     */
    public function setBranches(array $branches): void
    {
        $this->branches = $branches;
    }
}
