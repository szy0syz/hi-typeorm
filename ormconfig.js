const dotenv = require("dotenv");

// retrieve configurations from .env
// after running this line, value in .env will be populated into process.env
dotenv.config();

// it is safer to name one connection as 'default'.
// As BaseEntity executes query on connection name 'default'

// when connnection to one database only,
// name can be ignored and will be assumed as 'default'
module.exports = {
  type: "postgres",
  host: "localhost",
  port: "5432",
  username: "postgres",
  password: "pass123",
  database: "hi",
  synchronize: false,
  logging: true,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  cli: {
    migrationsDir: "src/migrations",
  },
};

// uncomment the following to connect to multiple database at once
// when multiple connection is established, calling `getConnection() === getConnection('default')`
// module.exports = [
//   {
//     name: "default", // name should be unique. it is used at getConnection(name?:string)
//     type: process.env.DB_TYPE,
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     syncchronize: false,
//     logging: process.env.NODE_ENV === "development",
//     entities: ["dist/entities/**/*.js"],
//     migrations: ["dist/migrations/**/*.js"],
//     cli: {
//       migrationsDir: "src/server/migrations",
//     },
//   },
//   {
//     name: "remote",
//     type: process.env.REMOTE_DB_TYPE,
//     host: process.env.REMOTE_DB_HOST,
//     port: Number(process.env.REMOTE_DB_PORT),
//     username: process.env.REMOTE_DB_USER,
//     password: process.env.REMOTE_DB_PASSWORDWORD,
//     database: process.env.REMOTE_DB_DATABASEBASE,
//     syncchronize: false,
//     logging: process.env.NODE_ENV === "development",
//   },
// ];
