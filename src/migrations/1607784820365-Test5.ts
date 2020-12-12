import {MigrationInterface, QueryRunner} from "typeorm";

export class Test51607784820365 implements MigrationInterface {
    name = 'Test51607784820365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "phone" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "phone"`);
    }

}
