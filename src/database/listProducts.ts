import { createQueryBuilder } from "typeorm";
import { ProductEntity } from "../entities";

/*
 * Lesson:
 * learn about how to retrieve data with queryManager
 */

type OrderBy = "id" | "name";

interface ListProductsProps {
  orderBy: OrderBy;
  asc: boolean;
  page: number;
  pageSize: number;
}

const listProducts = async (
  props?: ListProductsProps
): Promise<Array<ProductEntity>> => {
  let builder = createQueryBuilder(ProductEntity);

  if (!props) return builder.getMany();

  const { orderBy, asc, page, pageSize } = props;

  builder = builder.orderBy({ [orderBy]: asc ? "ASC" : "DESC" });

  return builder
    .take(pageSize)
    .skip((page - 1) * pageSize)
    .getMany();
};

export default listProducts;
