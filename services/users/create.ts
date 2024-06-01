import { Prisma } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import prisma from "../../prisma/prismaClient";
import { handlePrismaException } from "../../utils/prismaUtils";

type createUserProps = {
  username: string;
  role_id: string;
  first_name: string;
  last_name: string;
  birth_day: Date;
};
export const createUser = async (user: createUserProps) => {
  try {
    const toBeCreated = { id: uuidv4(), ...user };
    await prisma.users.create({ data: toBeCreated }).then(console.log);
    return toBeCreated;
  } catch (exception) {
    return handlePrismaException(exception);
  }
};
