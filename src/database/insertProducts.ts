import { getRepository } from "typeorm";
import { ProductEntity, UserEntity } from "../entities";

/*
 * Lesson:
 * learn about how to save entities with foreign key
 */

interface Product {
  name: string;
  createdBy: UserEntity;
}

const insertProducts = async (
  products: Array<Product>
): Promise<Array<ProductEntity>> => {
  const repo = getRepository(ProductEntity);

  const productEntities = products.map((product) => {
    const productEntity = new ProductEntity();

    productEntity.name = product.name;
    productEntity.createdBy = product.createdBy;

    return productEntity;
  });

  return repo.save(productEntities);
};

export default insertProducts;
