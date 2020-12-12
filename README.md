# hi-typeorm

## Description

* Understanding how to create `Entity` with  TypeORM
* Understanding `connection`
* Understanding how to use `migrations`
* Understanding `queryManager`

## Usage

To compile `typescript` into `javascript`, execute `npm run build`. Compiled code can be found in `./dist`.

To execute compiled code, run `npm run start`. Running `index.js` will start an interactive command line interface (CLI).

## Lesson 1: Entities

`[entities](src/entities)`

```ts
class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.products)
  createdBy: UserEntity;

  // 多个
  // (join 哪个模型, 对应哪个字段)
  @ManyToMany(
    () => CategoryEntity,
    (category: CategoryEntity) => category.products
  )
  categories: Array<CategoryEntity>;
  // 非常有Mongo的schema味道
  //
}
```

> 千万直接用 `.env` 配TypeORM，无比坑多。

## Lesson 2: Connection

Go through [.env.example](.env.example) to learn about connections with `.env`.

Go through [ormconfig.json](ormconfig.json) to learn about connections with `ormconfig.json`.

Go through [getDbConnection](src/getDbConnection.ts) to learn about connections with inline configuration.

## Lesson 3: QueryBuilder

Pull from `starter` branch if you would like to follow the tutorial.

Implement function with [database](src/database) to learn about TypeORM `queryManager`.

After implementing all the functions within `database`, you should be able to execute the CLI with `npm run start`.

## Lesson 4: QueryRunner

Go through [package.json](package.json) to learn about TypeORM's migration commands.

`npm run db:create <file-name>`: create empty migrations file
`npm run db:generate <file-name>`: create migrations with SQL clause
`npm run db:run`: execute all new migrations (execute ups)
`npm run db:revert`: execute latest one migration (execute down)

Go through [migrations](src/migrations) to learn how to create migrations with `queryRunner`.

## Lesson 5: Migration

* 坚持用文件 `.ts` 做数据迁移，别用`dist/**/*.js`，具体怎么配置 ？

> 1、

```json
{
  "typeorm": "ts-node node_modules/typeorm/cli.js",
}
```

> 2、配置里换上 .ts

```js
// ormconfig.js
module.exports = {
  synchronize: false,
  logging: true,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  cli: {
    migrationsDir: "src/migrations",
  },
};
```

> 3、开始使用

```bash
# 如果是重构来过，没有任何 migration 就这样
npm run typeorm migration:generate -- -n InitialDB

# 如果有就 migration ，只是you变动
npm run typeorm migration:generate -- -n Add-User

# 可以创建空的
npm run typeorm migration:create -- -n New1

# 最后执行脚本
npm run typeorm migration:run
```

一定要用ts啊，去build里执行js真不好。
