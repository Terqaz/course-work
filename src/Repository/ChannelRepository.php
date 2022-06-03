<?php

namespace App\Repository;

use App\Entity\Channel;
use App\Entity\ChannelUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Channel>
 *
 * @method Channel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Channel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Channel[]    findAll()
 * @method Channel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChannelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Channel::class);
    }

    public function add(Channel $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Channel $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /** Получить
     * @param int|null $userId
     * @return float|int|mixed[]|string
     */
    public function getNewMessagesInfo(?int $userId): array|float|int|string
    {
        // 'SELECT a FROM CmsArticle a JOIN a.user u ORDER BY u.name ASC'
//        return $this->getEntityManager()->createQuery("
//            SELECT c.name
//            FROM App\Entity\ChannelUser AS cu
//                JOIN cu.branchChannelUsers bcu
//                JOIN cu.channel c
//                JOIN bcu.branch b
//                JOIN b.branchMessages bm
//                JOIN bm.message m
//            WHERE cu.userData = :userId AND bm.message > bcu.lastSeenDate
//            ")
//            ->setParameter('userId', $userId)
//            ->getArrayResult();

        return $this->getEntityManager()->createQuery("
            SELECT u.firstName, c.name AS channel_name, b.name AS branch_name, m.text, m.creationDate
            FROM App\Entity\ChannelUser AS cu
                JOIN cu.branchChannelUsers bcu
                JOIN cu.channel c
                JOIN bcu.branch b
                JOIN b.branchMessages bm
                JOIN bm.message m
                JOIN bm.sender s
                JOIN s.userData u
            WHERE cu.userData = :userId
            ")
            ->setParameter('userId', $userId)
            ->getArrayResult();
    }

//    /**
//     * @return Channel[] Returns an array of Channel objects
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

//    public function findOneBySomeField($value): ?Channel
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
