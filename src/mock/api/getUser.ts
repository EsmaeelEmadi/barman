import { faker } from "@faker-js/faker";
import { randomNumber } from "@/utils/fn/randomNumber";

// TYPES
import type { IUser } from "@/types/user";

/**
 * NOTE: for the sake of siplicity I didn't included errors
 */
type GetUser = () => Promise<IUser | undefined>;

export const getUser: GetUser = async () => {
  const randNum = randomNumber(1, 5);
  const randName = faker.person.firstName();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: randName,
        avatar: `user${randNum}`,
      });
    }, 1000);
  });
};
