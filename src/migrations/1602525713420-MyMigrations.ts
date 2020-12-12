import { MigrationInterface, Table, QueryRunner } from "typeorm";

export class MyMigrations1602525713420 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: "catalog_table",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true, // just like PrimaryGeneatedColumn
            isGenerated: true, // just like PrimaryGeneatedColumn
            isNullable: false, // like @Column({ nullable: false })
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable("catalog_table");
  }
}
