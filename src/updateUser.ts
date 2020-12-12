import prompts from "prompts";
import { updateUser as updateUserFromDb, listUsers } from "./database";

import getDbConnection from "./getDbConnection";

const updateUser = async () => {
  const connection = await getDbConnection();

  const users = await listUsers();

  if (!users.length) {
    console.log("No user is updated.");
    return;
  }

  const { id, username } = await prompts([
    {
      type: "select",
      name: "id",
      message: "Select a users to be updated",
      choices: users.map((user) => ({
        title: `${user.username} (${user.id})`,
        value: user.id,
      })),
      validate: (id: number) => {
        if (!id) return "Please select a user.";
        return true;
      },
    },
    {
      type: "text",
      name: "username",
      message: "Enter a new username",
      validate: (username: string) => {
        if (!username) return "Username required.";
        return true;
      },
    },
  ]);

  await updateUserFromDb({ id, username });

  await connection.close();
  console.log(`A User of ${id} is updated.`);
};

export default updateUser;
