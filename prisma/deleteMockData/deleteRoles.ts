import { PrismaQuery } from "../../utils/prismaUtils";
import prisma from "../prismaClient";

export const deleteRoles = async () =>
  await PrismaQuery(() =>
    prisma.roles.deleteMany({
      where: {
        OR: [
          { id: process.env.ROLE_SUPER_ADMIN },
          { id: process.env.ROLE_ADMIN },
          { id: process.env.ROLE_USER },
        ],
      },
    }),
  );
