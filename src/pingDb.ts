import getDbConnection from "./getDbConnection";
const pingDb = async () => {
  const connection = await getDbConnection();
  console.log("✔ successfully connected to database");
  connection.close();
};

export default pingDb;
