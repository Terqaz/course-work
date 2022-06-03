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

//    /**
//     * @return DialogMessage[] Returns an array of DialogMessage objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?DialogMessage
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }


}
