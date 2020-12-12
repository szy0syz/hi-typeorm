import { UserEntity } from "../entities";

/*
 * Lesson:
 * learn about how to save entities
 */

interface User {
  username: string;
  emailVerified: boolean;
  emailVerifiedAt?: Date;
}

const insertUsers = async (users: Array<User>): Promise<Array<UserEntity>> => {
  const userEntities = users.map((user) => {
    const userEntity = new UserEntity();
    userEntity.username = user.username;
    userEntity.emailVerified = user.emailVerified;
    if (user.emailVerifiedAt) userEntity.emailVerifiedAt = user.emailVerifiedAt;

    return userEntity;
  });

  return UserEntity.save(userEntities);
};

export default insertUsers;
