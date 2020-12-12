import { date, random } from "faker";
import { insertCategories, insertUsers, insertProducts } from "./database";

import getDbConnection from "./getDbConnection";

interface User {
  username: string;
  emailVerified: boolean;
  emailVerifiedAt?: Date;
}

const SEED_USERS = Array.from({ length: 50 }).map(() => {
  const user: User = {
    username: random.word(),
    emailVerified: random.boolean(),
  };
  if (user.emailVerified) user.emailVerifiedAt = date.past();

  return user;
});

const SEED_PRODUCTS = Array.from({ length: 100 }).map(() => ({
  name: random.word(),
}));

const seeData = async () => {
  const connection = await getDbConnection();
  const users = await insertUsers(SEED_USERS);
  const products = await insertProducts(
    SEED_PRODUCTS.map((itm, idx) => ({
      ...itm,
      createdBy: users[idx % users.length],
    }))
  );

  await insertCategories([
    { name: "Tablet", products: products.slice(0, 50) },
    { name: "Phone", products: products.slice(50, 100) },
  ]);

  await connection.close();
  console.log("Data is injected into database.");
};

export default seeData;
