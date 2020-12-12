import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToMany,
  JoinTable,
} from "typeorm";

import ProductEntity from "./ProductEntity";

/*
 * An exmaple of using ManyToMany relationship,
 * one of the two entities has to contains @JoinTable tag,
 * it doesnt matter which of the two has it, it just has to exists.
 */

@Entity()
class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    () => ProductEntity,
    (product: ProductEntity) => product.categories
  )
  @JoinTable()
  products: Array<ProductEntity>;
}

export default CategoryEntity;
