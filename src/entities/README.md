# Typeorm Tutorial

Here are three Entites: User, Product, Categories. Below is a ER-Diagram of their relationships.

## ER-Diagram


## Understanding basic column types

Inside `UserEntity`, there are text, number, date columns. Moreover, it also implemented database index (`@Index`), generated id (`@PrimaryGeneratedColumn`) field and so on.

## Understanding One to Many Relationship

There is a one-to-many relationship between `UserEntity` and `ProductEntity` with `createdBy`. It is implemented inside `ProductEntity` with a foreign-key (`@ManyToOne`). 


## Understanding Many to Many Relationship

Between `ProductEntity` and `CategoryEntity`, there is a many-to-many relationship. Under the hood, typeorm create an external table to handle the relationship between the two (`category_entity_products_product_entity`). Go into `CategoryEntity` o learn more on how to use `@JoinTable` and `@ManyToMany`.



## Understanding BaseEntity

`UserEntity` inherits `BaseEntity` from `TypeORM`, which inject `queryManager` into this Entity.

Therefore, `User` contains query functions such as `save`, `find`, `findOne` etc.

These functions are handy for simple CRUD actions, but are insufficient to perform complex query.
