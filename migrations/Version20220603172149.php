<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220603172149 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dialog_message DROP INDEX UNIQ_9BAC3020CD53EDB6, ADD INDEX IDX_9BAC3020CD53EDB6 (receiver_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dialog_message DROP INDEX IDX_9BAC3020CD53EDB6, ADD UNIQUE INDEX UNIQ_9BAC3020CD53EDB6 (receiver_id)');
    }
}
