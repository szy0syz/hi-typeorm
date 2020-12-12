import { getRepository } from "typeorm";
import { ProductEntity } from "../entities";
/*
 * Lesson:
 * Implment the following to learn about delete API
 */
const deleteProductById = async (id: number) => {
  const repo = getRepository(ProductEntity);

  await repo.createQueryBuilder().delete().where({ id }).execute();
};

export default deleteProductById;
