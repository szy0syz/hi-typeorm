import { UserEntity } from "../entities";

/*
 * Lesson:
 * learn about how to retrieve data with Entity that inherit from BaseEntity
 */

type OrderBy = "id" | "username" | "emailVerified" | "emailVerifiedAt";

interface ListUsersProps {
  orderBy: OrderBy;
  asc: boolean;
  page: number;
  pageSize: number;
}

const listUsers = async (
  props?: ListUsersProps
): Promise<Array<UserEntity>> => {
  if (!props) return UserEntity.find();

  const { orderBy, asc, page, pageSize } = props;

  return UserEntity.find({
    order: { [orderBy]: asc ? "ASC" : "DESC" },
    take: pageSize,
    skip: (page - 1) * pageSize,
  });
};

export default listUsers;
