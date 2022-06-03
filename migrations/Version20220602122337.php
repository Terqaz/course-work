<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220602122337 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE branch_channel_user DROP FOREIGN KEY FK_4C23A291102DEC94');
        $this->addSql('ALTER TABLE branch_channel_user DROP FOREIGN KEY FK_4C23A291DCD6CC49');
        $this->addSql('ALTER TABLE branch_channel_user ADD id INT AUTO_INCREMENT NOT NULL, ADD last_seen_date DATETIME NOT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
        $this->addSql('ALTER TABLE branch_channel_user ADD CONSTRAINT FK_4C23A291102DEC94 FOREIGN KEY (channel_user_id) REFERENCES channel_user (id)');
        $this->addSql('ALTER TABLE branch_channel_user ADD CONSTRAINT FK_4C23A291DCD6CC49 FOREIGN KEY (branch_id) REFERENCES branch (id)');
        $this->addSql('ALTER TABLE dialog_message ADD is_read TINYINT(1) DEFAULT 0 NOT NULL');
        $this->addSql('ALTER TABLE tag DROP FOREIGN KEY FK_389B78361220EA6');
        $this->addSql('DROP INDEX IDX_389B78361220EA6 ON tag');
        $this->addSql('ALTER TABLE tag CHANGE creator_id user_data_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tag ADD CONSTRAINT FK_389B7836FF8BF36 FOREIGN KEY (user_data_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_389B7836FF8BF36 ON tag (user_data_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE branch_channel_user MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE branch_channel_user DROP FOREIGN KEY FK_4C23A291102DEC94');
        $this->addSql('ALTER TABLE branch_channel_user DROP FOREIGN KEY FK_4C23A291DCD6CC49');
        $this->addSql('ALTER TABLE branch_channel_user DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE branch_channel_user DROP id, DROP last_seen_date');
        $this->addSql('ALTER TABLE branch_channel_user ADD CONSTRAINT FK_4C23A291102DEC94 FOREIGN KEY (channel_user_id) REFERENCES channel_user (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE branch_channel_user ADD CONSTRAINT FK_4C23A291DCD6CC49 FOREIGN KEY (branch_id) REFERENCES branch (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE branch_channel_user ADD PRIMARY KEY (branch_id, channel_user_id)');
        $this->addSql('ALTER TABLE dialog_message DROP is_read');
        $this->addSql('ALTER TABLE tag DROP FOREIGN KEY FK_389B7836FF8BF36');
        $this->addSql('DROP INDEX IDX_389B7836FF8BF36 ON tag');
        $this->addSql('ALTER TABLE tag CHANGE user_data_id creator_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tag ADD CONSTRAINT FK_389B78361220EA6 FOREIGN KEY (creator_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_389B78361220EA6 ON tag (creator_id)');
    }
}
