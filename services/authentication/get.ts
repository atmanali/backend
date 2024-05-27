import prisma from "../../prisma/prismaClient";
import { Prisma } from "@prisma/client";
import { handlePrismaException } from "../../utils/prismaUtils";

export const getAuthentication = async (
  username: string,
  password?: string,
) => {
  const filters: {username: string, password?: string} = { username: username };
  if (password) filters.password = password;

  try {
    const output = await prisma.authentication.findFirst({ where: filters });
    return output;
  } catch (exception) {
    handlePrismaException(exception);
  }
};
