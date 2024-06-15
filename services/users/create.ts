import { Prisma } from "@prisma/client";
import prisma from "../../prisma/prismaClient";
import { PrismaQuery } from "../../utils/prismaUtils";
import { encrypt } from "../../utils/crypting";

const toBeCreated = (user: Prisma.usersCreateInput) => ({
  ...user,
  //todo: hash the password before passing it to database
  password: encrypt(user.password),
});

export const createUser = async (user: Prisma.usersCreateInput) => {
  // @ts-ignore
  return PrismaQuery(() => prisma.users.create({ data: toBeCreated(user) }));
};
