<?php

namespace App\Repository;

use App\Entity\ChannelUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ChannelUser>
 *
 * @method ChannelUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChannelUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChannelUser[]    findAll()
 * @method ChannelUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChannelUserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChannelUser::class);
    }

    public function add(ChannelUser $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ChannelUser $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByUserAndBranch(int $userId, int $branchId): ChannelUser
    {
        return $this->getEntityManager()->createQuery("
            SELECT cu
            FROM App\Entity\ChannelUser AS cu
                INNER JOIN cu.userData u
                INNER JOIN cu.branchChannelUsers bcu
                INNER JOIN bcu.branch b
            WHERE u.id = :userId AND b.id = :branchId
            ")
            ->setParameter('userId', $userId)
            ->setParameter('branchId', $branchId)
            ->getResult()[0];
    }

    public function findByUserAndChannel(int $userId, int $channelId)
    {
        return $this->getEntityManager()->createQuery("
            SELECT cu
            FROM App\Entity\ChannelUser AS cu
                INNER JOIN cu.userData u
                INNER JOIN cu.channel c
            WHERE u.id = :userId AND c.id = :channelId
            ")
            ->setParameter('userId', $userId)
            ->setParameter('channelId', $channelId)
            ->getResult()[0];
    }

//    /**
//     * @return ChannelUser[] Returns an array of ChannelUser objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ChannelUser
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

}
