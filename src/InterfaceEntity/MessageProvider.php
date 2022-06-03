<?php

namespace App\InterfaceEntity;

// Нужен для отображения в навигационном меню
class MessageProvider
{
    // 'channel', 'branch', 'message_provider'
    private string $type;
    // Имя пользователя или название канала или ветки
    private string $name;
    // Для канала - сумма новых сообщений по всем веткам, в которых состоит данный пользователь
    private int $newMessagesCount;
    // только для message_provider и branch
    private ?string $lastMessage;
    // Форматируется на стороне сервера
    private string $lastMessageDate;
    private string $lastMessageAuthor;
}
