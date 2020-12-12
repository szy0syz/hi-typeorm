import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Index,
  OneToMany,
} from "typeorm";

import ProductEntity from "./ProductEntity";

/*
 * Contains example of various Column type:
 * 1. PrimaryGeneratedColumn, it is an indexed incremented integer column
 * 2. username is indexed
 * 3. emailVerified: is a boolean column
 * 4. emailVerifiedAt: is a date field and it is nullable
 * 5. products is a one to many column, it is not a physical column inside database,
 * 		rather, it is ORM 'column' and is physically defiend as foreign key in the Product Table
 */

@Entity()
class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  username: string;

  @Column({nullable: true})
  age: number;

  @Column({nullable: true})
  phone: string;

  @Column()
  emailVerified: boolean;

  @Column({ nullable: true })
  emailVerifiedAt: Date;

  @OneToMany(() => ProductEntity, (product: ProductEntity) => product.createdBy)
  products: Array<ProductEntity>;
}

export default UserEntity;
