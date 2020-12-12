import { getRepository } from 'typeorm'
import { CategoryEntity, ProductEntity } from "../entities";

interface Category {
  name: string;
  products: Array<ProductEntity>;
}

/*
 * Lesson:
 * learn about how to save entities with many-to-many relationship
 */

const insertCategories = async (
  categories: Array<Category>
): Promise<Array<CategoryEntity>> => {
	const repo = getRepository(CategoryEntity)

	const categoriesEntities = categories.map((categories) => {
		const categoriesEntity = new CategoryEntity()

		categoriesEntity.name = categories.name
		categoriesEntity.products = categories.products

		console.log(categoriesEntity.products)

		return categoriesEntity
	})

  return repo.save(categoriesEntities);
};

export default insertCategories;
