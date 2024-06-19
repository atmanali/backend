import prisma from "../../prisma/prismaClient";
import { PrismaQuery } from "../../utils/prismaUtils";
import { Prisma } from "@prisma/client";

export const deleteUser = async (user: Partial<Prisma.usersCreateInput>) => {
  return await PrismaQuery(() =>
    prisma.users.delete({
      where: { username: user.username },
      select: { username: true },
    }),
  );
};
