import { PrismaQuery } from "../../utils/prismaUtils";
import prisma from "../../prisma/prismaClient";
import { encrypt } from "../../utils/crypting";

export const login = async (username: string, password: string) =>
  await PrismaQuery(() =>
    prisma.users.findUnique({
      select: { username: true },
      where: { username: username, password: encrypt(password) },
    }),
  );
