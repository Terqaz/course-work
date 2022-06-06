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
     * @param int $userId
     * @return float|int|mixed[]|string
     */
    public function getNewMessagesInfo(int $userId): array|float|int|string
    {
        $messagesCount = $this->getEntityManager()->createQuery("
            SELECT c.id AS channelId, COUNT(bm.message) AS messagesCount
            FROM App\Entity\ChannelUser AS cu
                INNER JOIN cu.branchChannelUsers bcu
                INNER JOIN cu.channel c
                INNER JOIN bcu.branch b
                INNER JOIN b.branchMessages bm
            WHERE cu.userData = :userId AND bm.message > bcu.lastSeenDate
            GROUP BY channelId
            ")
            ->setParameter('userId', $userId)
            ->getArrayResult();

        $messagesCountByChannelId = [];
        foreach ($messagesCount as $item) {
            $messagesCountByChannelId[$item['channelId']] = $item['messagesCount'];
        }
        return $messagesCountByChannelId;
    }

    public function getUserChannels(int $userId): array|float|int|string
    {
        return $this->getEntityManager()->createQuery("
            SELECT c.id AS id, 
                    c.name AS name,
                    c.isPrivate AS isPrivate
            FROM App\Entity\User AS u
                INNER JOIN u.channelUsers cu
                INNER JOIN cu.channel c
            WHERE u.id = :userId
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
    public function findByQuery(string $query)
    {
        return $this->getEntityManager()->createQuery("
            SELECT c
            FROM App\Entity\Channel AS c
            WHERE c.name LIKE :query
            ")
            ->setParameter('query', '%' . $query . '%', 'string')
            ->getResult();
    }
}
