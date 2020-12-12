import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
} from "typeorm";

import CategoryEntity from "./CategoryEntity";
import UserEntity from "./UserEntity";

/*
 * contains example of:
 * 1. ManyToOne (Foreignkey example)
 * 2. ManyToMany relationship, @JoinTable is defined in CategoryEntity
 *
 */

@Entity()
class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.products)
  createdBy: UserEntity;

  @ManyToMany(
    () => CategoryEntity,
    (category: CategoryEntity) => category.products
  )
  categories: Array<CategoryEntity>;
}

export default ProductEntity;
