import { createConnection, getConnectionManager, Connection } from "typeorm";
import dotenv from "dotenv";

import * as Entities from "./entities";

const getDbConnection = async () => {
  // read .env file into process.env
  dotenv.config();

  // .env has the highest priority, here createConnection will load connection options from
  // ormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml
  // files, or from special environment variables
  //
  // TODO: to connect using configuation file, uncomment the following:
  const connection: Connection = await createConnection();

  // !! DO NOT PUT CONNECTION Information here. It should not be commited to your repository.
  // TODO: to manually connect to database. uncomment the following:
  // const connectionManager = getConnectionManager();
  // const connection: Connection = connectionManager.create({
  //   type: process.env.DB_CONNECTION as any,
  //   host: process.env.DB_HOST,
  //   port: Number(process.env.DB_PORT),
  //   username: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_DATABASE,
  //   entities: Object.values(Entities),
  //   logging: true,
  // });
  // await connection.connect();
  // await connection.synchronize(); // TODO: uncomment this line to synchronize

  return connection;
};

export default getDbConnection;
