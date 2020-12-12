import { UserEntity } from "../entities";
/*
 * Lesson:
 * learn about how to update data
 */

interface User {
  id: number;
  username: string;
}

const updateUser = async (user: User) => {
  const userEntity = await UserEntity.findOne({ id: user.id });
  userEntity.username = user.username;

  await userEntity.save();
};

export default updateUser;
