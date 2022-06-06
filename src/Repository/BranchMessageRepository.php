<?php

namespace App\Repository;

use App\Entity\BranchMessage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<BranchMessage>
 *
 * @method BranchMessage|null find($id, $lockMode = null, $lockVersion = null)
 * @method BranchMessage|null findOneBy(array $criteria, array $orderBy = null)
 * @method BranchMessage[]    findAll()
 * @method BranchMessage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BranchMessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BranchMessage::class);
    }

    public function add(BranchMessage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(BranchMessage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getMessages(int $userId, int $branchId): array|float|int|string
    {
        return $this->getEntityManager()->createQuery("
            SELECT s.id AS userId,
                    CONCAT(u.lastName, ' ', u.firstName) AS userName,
                    m.id AS messageId,
                    m.text AS text,
                    m.creationDate AS creationDate
            FROM App\Entity\ChannelUser AS cu
                INNER JOIN cu.branchChannelUsers bcu
                INNER JOIN bcu.branch b
                INNER JOIN b.branchMessages bm
                INNER JOIN bm.message m
                INNER JOIN bm.sender s
                INNER JOIN s.userData u
            WHERE cu.userData = :userId AND b.id = :branchId
            ")
            ->setParameter('userId', $userId)
            ->setParameter('branchId', $branchId)
            ->getArrayResult();
    }

//    /**
//     * @return BranchMessage[] Returns an array of BranchMessage objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('b.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?BranchMessage
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }


}
