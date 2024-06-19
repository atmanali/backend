import prisma from "../prismaClient";
import { PrismaQuery } from "../../utils/prismaUtils";

export const deleteUsers = async () =>
  await PrismaQuery(() =>
    prisma.users.deleteMany({
      where: {
        OR: [
          { username: "admin" },
          { username: "superadmin" },
          { username: "basicUser" },
        ],
      },
    }),
  );
