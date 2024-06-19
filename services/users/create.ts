import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prismaClient";
import { PrismaQuery } from "../../utils/prismaUtils";
import { encrypt } from "../../utils/crypting";

const toBeCreated = (user: Prisma.usersCreateInput) => ({
  ...user,
  password: encrypt(user.password),
});

export const createUser = async (user: Prisma.usersCreateInput) => {
  // @ts-ignore
  return await PrismaQuery(() => prisma.users.create({ data: toBeCreated(user) }));
};
