<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220603145401 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE tag_channel (tag_id INT NOT NULL, channel_id INT NOT NULL, INDEX IDX_90C8A3EDBAD26311 (tag_id), INDEX IDX_90C8A3ED72F5A1AA (channel_id), PRIMARY KEY(tag_id, channel_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE tag_channel ADD CONSTRAINT FK_90C8A3EDBAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tag_channel ADD CONSTRAINT FK_90C8A3ED72F5A1AA FOREIGN KEY (channel_id) REFERENCES channel (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tag DROP FOREIGN KEY FK_389B78372F5A1AA');
        $this->addSql('DROP INDEX IDX_389B78372F5A1AA ON tag');
        $this->addSql('ALTER TABLE tag DROP channel_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE tag_channel');
        $this->addSql('ALTER TABLE tag ADD channel_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tag ADD CONSTRAINT FK_389B78372F5A1AA FOREIGN KEY (channel_id) REFERENCES channel (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_389B78372F5A1AA ON tag (channel_id)');
    }
}
