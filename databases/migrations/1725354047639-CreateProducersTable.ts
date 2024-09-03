import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProducersTable1725354047639 implements MigrationInterface {
  name = 'CreateProducersTable1725354047639';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`producers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`producers\``);
  }
}
