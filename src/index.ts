import prompts from "prompts";

import deleteProduct from "./deleteProduct";
import listProducts from "./listProducts";
import listUsers from "./listUsers";
import pingDb from "./pingDb";
import seedData from "./seedData";
import updateUser from "./updateUser";

type Action = () => Promise<void>;

const start = async () => {
  const { action }: { action: Action | "exit" } = await prompts({
    type: "select",
    name: "action",
    message: "Select an action",
    choices: [
      { title: "Connect to database", value: pingDb },
      { title: "Insert seed data", value: seedData },
      { title: "Delete Product By ID", value: deleteProduct },
      { title: "List products", value: listProducts },
      { title: "List Users", value: listUsers },
      { title: "Update User", value: updateUser },
      { title: "Exit console", value: "exit" },
    ],
    validate: (action: any) => {
      if (!action) return "Please select an action.";
      return true;
    },
  });

  if (action !== "exit") await action();

  console.log("Good bye, hope you enjoyed.");
};

start();
