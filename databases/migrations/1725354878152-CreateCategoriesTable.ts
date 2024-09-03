import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCategoriesTable1725354878152 implements MigrationInterface {
  name = 'CreateCategoriesTable1725354878152';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`producerId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`categories\` ADD CONSTRAINT \`FK_9c291250c5c7d433d89fc7346b8\` FOREIGN KEY (\`producerId\`) REFERENCES \`producers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`categories\` DROP FOREIGN KEY \`FK_9c291250c5c7d433d89fc7346b8\``,
    );
    await queryRunner.query(`DROP TABLE \`categories\``);
  }
}
