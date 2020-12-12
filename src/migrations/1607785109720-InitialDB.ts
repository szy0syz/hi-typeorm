import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialDB1607785109720 implements MigrationInterface {
    name = 'InitialDB1607785109720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "age" integer, "phone" character varying, "emailVerified" boolean NOT NULL, "emailVerifiedAt" TIMESTAMP, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9b998bada7cff93fcb953b0c37" ON "user_entity" ("username") `);
        await queryRunner.query(`CREATE TABLE "product_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdById" integer, CONSTRAINT "PK_6e8f75045ddcd1c389c765c896e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1a38b9007ed8afab85026703a53" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_entity_products_product_entity" ("categoryEntityId" integer NOT NULL, "productEntityId" integer NOT NULL, CONSTRAINT "PK_9c2b2fb10f272b883d46400208c" PRIMARY KEY ("categoryEntityId", "productEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5e9466b44a19898c36804fcd1b" ON "category_entity_products_product_entity" ("categoryEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5f048e7ebf32f98f387b5d7ed2" ON "category_entity_products_product_entity" ("productEntityId") `);
        await queryRunner.query(`ALTER TABLE "product_entity" ADD CONSTRAINT "FK_c4e295fe470b5b44dd1f9d4ec07" FOREIGN KEY ("createdById") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_entity_products_product_entity" ADD CONSTRAINT "FK_5e9466b44a19898c36804fcd1b4" FOREIGN KEY ("categoryEntityId") REFERENCES "category_entity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_entity_products_product_entity" ADD CONSTRAINT "FK_5f048e7ebf32f98f387b5d7ed2f" FOREIGN KEY ("productEntityId") REFERENCES "product_entity"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_entity_products_product_entity" DROP CONSTRAINT "FK_5f048e7ebf32f98f387b5d7ed2f"`);
        await queryRunner.query(`ALTER TABLE "category_entity_products_product_entity" DROP CONSTRAINT "FK_5e9466b44a19898c36804fcd1b4"`);
        await queryRunner.query(`ALTER TABLE "product_entity" DROP CONSTRAINT "FK_c4e295fe470b5b44dd1f9d4ec07"`);
        await queryRunner.query(`DROP INDEX "IDX_5f048e7ebf32f98f387b5d7ed2"`);
        await queryRunner.query(`DROP INDEX "IDX_5e9466b44a19898c36804fcd1b"`);
        await queryRunner.query(`DROP TABLE "category_entity_products_product_entity"`);
        await queryRunner.query(`DROP TABLE "category_entity"`);
        await queryRunner.query(`DROP TABLE "product_entity"`);
        await queryRunner.query(`DROP INDEX "IDX_9b998bada7cff93fcb953b0c37"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
