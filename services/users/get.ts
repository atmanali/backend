import prisma from "../../prisma/prismaClient";

export const getUser = async (username: string) => {
  if (!username) return undefined;
  return prisma.users.findFirst({ where: { username: username } });
};
