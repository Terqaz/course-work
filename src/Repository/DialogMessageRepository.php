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

    public function getNewMessagesCount(int $userId): array|float|int|string
    {
        return $this->getEntityManager()->createQuery("
            SELECT s.id AS userId, CONCAT(s.lastName, ' ', s.firstName) AS userName, COUNT(dm.message) AS messagesCount
            FROM App\Entity\DialogMessage AS dm
                JOIN dm.sender s
                JOIN dm.receiver r
            WHERE r.id = :userId 
            GROUP BY userId
            ")
            ->setParameter('userId', $userId)
            ->getArrayResult(); // AND dm.isRead = FALSE //TODO
    }

    public function getLastMessageInfo(int $userId): array|float|int|string
    {
        return $this->getEntityManager()->createQuery("
            SELECT s.id AS userId, m.text, MAX(m.creationDate)
            FROM App\Entity\DialogMessage AS dm
                JOIN dm.sender s
                JOIN dm.receiver r
                JOIN dm.message m
            WHERE r.id = :userId
            ")
            ->setParameter('userId', $userId)
            ->getArrayResult(); // AND dm.isRead = FALSE //TODO
    }

    public function findByUserIds(int $receiverId, int $otherUserId): string|int|float|array
    {
        return $this->getEntityManager()->createQuery("
            SELECT s.id AS senderId,
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


}
