import prompts from "prompts";

import { deleteProductById, listProducts } from "./database";

import getDbConnection from "./getDbConnection";

const deleteProduct = async () => {
  const connection = await getDbConnection();

  const products = await listProducts();

  if (!products.length) {
    console.log(`Nothing product is deleted.`);
    return;
  }

  const { id } = await prompts({
    type: "select",
    name: "id",
    message: "Select a product to be deleted",
    choices: products.map((product) => ({
      title: `${product.name} (${product.id})`,
      value: product.id,
    })),
    validate: (id: number) => {
      if (!id) return "Please select a product.";
      return true;
    },
  });
  await deleteProductById(id);

  await connection.close();
  console.log(`A Product of ${id} deleted.`);
};

export default deleteProduct;
