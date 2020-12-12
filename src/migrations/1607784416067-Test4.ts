import {MigrationInterface, QueryRunner} from "typeorm";

export class Test41607784416067 implements MigrationInterface {
    name = 'Test41607784416067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "age" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "age"`);
    }

}
