<?php

namespace App\Repository;

use App\Entity\DialogMessage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<DialogMessage>
 *
 * @method DialogMessage|null find($id, $lockMode = null, $lockVersion = null)
 * @method DialogMessage|null findOneBy(array $criteria, array $orderBy = null)
 * @method DialogMessage[]    findAll()
 * @method DialogMessage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DialogMessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DialogMessage::class);
    }

    public function add(DialogMessage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(DialogMessage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getNewMessagesInfo(int $userId): array|float|int|string
    {
        $messagesCount =  $this->getEntityManager()->createQuery("
            SELECT s.id AS userId, COUNT(dm.message) AS messagesCount
            FROM App\Entity\DialogMessage AS dm
                JOIN dm.sender s
                JOIN dm.receiver r
            WHERE r.id = :userId AND dm.isRead = 0
            GROUP BY userId
            ")
            ->setParameter('userId', $userId)
            ->getArrayResult();

        $messagesCountByUserId = [];
        foreach ($messagesCount as $item) {
            $messagesCountByUserId[$item['userId']] = $item['messagesCount'];
        }
        return $messagesCountByUserId;
    }

    public function findByUserId(int $userId): array|float|int|string
    {
        return $this->getEntityManager()->createQuery("
            SELECT DISTINCT s.id AS userId, CONCAT(s.lastName, ' ', s.firstName) AS userName
            FROM App\Entity\DialogMessage AS dm
                JOIN dm.sender s
                JOIN dm.receiver r
            WHERE r.id = :userId 
            ")
            ->setParameter('userId', $userId)
            ->getArrayResult();
    }

    public function findByQuery(string $query): array|float|int|string
    {
        return $this->getEntityManager()->createQuery("
            SELECT u.id AS userId, CONCAT(u.lastName, ' ', u.firstName, ' ', u.middleName) AS userName
            FROM App\Entity\User AS u
            WHERE CONCAT(u.lastName, ' ', u.firstName) LIKE :query
            ORDER BY userName
            ")
            ->setParameter('query', '%' . $query . '%', 'string')
            ->getArrayResult();
    }

    public function findByUserIds(int $receiverId, int $otherUserId): string|int|float|array
    {
        return $this->getEntityManager()->createQuery("
            SELECT m.id AS messageId,
                    s.id AS senderId,
                    CONCAT(s.lastName, ' ', s.firstName) AS otherUserName, 
                    m.text AS text, 
                    m.creationDate AS creationDate, 
                    dm.isRead AS isRead
            FROM App\Entity\DialogMessage AS dm
                JOIN dm.sender s
                JOIN dm.receiver r
                JOIN dm.message m
            WHERE r.id IN (:receiverId, :senderId) AND s.id IN (:receiverId, :senderId)
            ORDER BY m.creationDate ASC
            ")
            ->setParameters([
                'receiverId' => $receiverId,
                'senderId' => $otherUserId,
            ])
            ->getArrayResult();
    }

    public function findByUserIdsAndQuery(int $receiverId, int $otherUserId, string $query): string|int|float|array
    {
        return $this->getEntityManager()->createQuery("
            SELECT m.id AS messageId,
                    s.id AS senderId,
                    CONCAT(s.lastName, ' ', s.firstName) AS otherUserName, 
                    m.text AS text, 
                    m.creationDate AS creationDate, 
                    dm.isRead AS isRead
            FROM App\Entity\DialogMessage AS dm
                JOIN dm.sender s
                JOIN dm.receiver r
                JOIN dm.message m
            WHERE r.id IN (:receiverId, :senderId) 
                AND s.id IN (:receiverId, :senderId)
                AND m.text LIKE :query
            ORDER BY m.creationDate ASC
            ")
            ->setParameter('receiverId', $receiverId)
            ->setParameter('senderId', $otherUserId)
            ->setParameter('query', '%' . $query . '%', 'string')
            ->getArrayResult();
    }
}
