import prompts from "prompts";

import { listUsers as listUsersFromDB } from "./database";

import getDbConnection from "./getDbConnection";

const validateNonEmpty = (val: any) => (!!val ? true : "Value required");

const validatePositive = (val: number) => val > 0;

const listUsers = async () => {
  const connection = await getDbConnection();

  const opts = await prompts([
    {
      type: "select",
      name: "orderBy",
      message: "Select an order by column",
      choices: [
        { title: "id", value: "id" },
        { title: "username", value: "username" },
        { title: "emailVerified", value: "emailVerified" },
        { title: "emailVerifiedAt", value: "emailVerifiedAt" },
      ],
      validate: validateNonEmpty,
    },
    {
      type: "select",
      name: "asc",
      message: "Order by Ascending / Descending",
      choices: [
        { title: "Ascending", value: true },
        { title: "Descending", value: false },
      ],
    },

    {
      type: "number",
      name: "page",
      message: "Enter a page number",
      validate: validatePositive,
    },
    {
      type: "number",
      name: "pageSize",
      message: "Enter a page size",
      validate: validatePositive,
    },
  ]);

  const data = await listUsersFromDB(opts);
  const dataStr = JSON.stringify(data, null, 4);

  await connection.close();
  console.log(`You retrieved the following users:\n${dataStr}`);
};

export default listUsers;
