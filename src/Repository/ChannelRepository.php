<?php

namespace App\Repository;

use App\Entity\Channel;
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
    public function getNewMessagesCount(?int $userId): array|float|int|string
    {
        return $this->getEntityManager()->createQuery("
            SELECT c.id AS channelId, c.name AS channelName, COUNT(bm.message) AS messagesCount
            FROM App\Entity\ChannelUser AS cu
                INNER JOIN cu.branchChannelUsers bcu
                INNER JOIN cu.channel c
                INNER JOIN bcu.branch b
                INNER JOIN b.branchMessages bm
                INNER JOIN bm.message m
            WHERE cu.userData = :userId
            GROUP BY channelId
            ")
            ->setParameter('userId', $userId)
            ->getArrayResult(); // AND bm.message > bcu.lastSeenDate
    }

    /** Получить
     * @param int $userId
     * @return float|int|mixed[]|string
     */
    public function getNewMessagesInfo(int $userId): array|float|int|string
    {
        $S1 = $this->getEntityManager()->createQuery("
            SELECT c.id AS channelId, c.name AS channelName, COUNT(bm.message) AS messagesCount
            FROM App\Entity\ChannelUser AS cu
                INNER JOIN cu.branchChannelUsers bcu
                INNER JOIN cu.channel c
                INNER JOIN bcu.branch b
                INNER JOIN b.branchMessages bm
            WHERE cu.userData = :userId 
            GROUP BY channelId
            ")
            ->setParameter('userId', $userId)
            ->getArrayResult(); // AND bm.message > bcu.lastSeenDate

        $S2 = $this->getEntityManager()->createQuery("
            SELECT c1.id AS channelId, m1.creationDate
            FROM App\Entity\ChannelUser AS cu1
                INNER JOIN cu1.branchChannelUsers bcu1
                INNER JOIN cu1.channel c1
                INNER JOIN bcu1.branch b1
                INNER JOIN b1.branchMessages bm1
                INNER JOIN bm1.message m1
            WHERE cu1.userData = :userId 
                AND m1.creationDate = (
                    SELECT MAX(m2.creationDate)
                    FROM App\Entity\ChannelUser AS cu2
                        INNER JOIN cu2.branchChannelUsers bcu2
                        INNER JOIN cu2.channel c2
                        INNER JOIN bcu2.branch b2
                        INNER JOIN b2.branchMessages bm2
                        INNER JOIN bm2.message m2
                    WHERE cu2.userData = :userId AND c2.id = c1.id
                    GROUP BY c2.id
                )
            ")
            ->setParameter('userId', $userId)
            ->getArrayResult(); // AND bm.message > bcu.lastSeenDate

        dd([$S1, $S2]);
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
