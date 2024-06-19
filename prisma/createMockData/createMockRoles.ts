import prisma from "../prismaClient";
import { Prisma } from "@prisma/client";
import { PrismaQuery } from "../../utils/prismaUtils";

export const createMockRoles = async () =>
  await PrismaQuery(() =>
    prisma.roles.createMany({
      data: [
        {
          id: process.env.ROLE_ADMIN as string,
          name: "admin",
        },
        {
          id: process.env.ROLE_SUPER_ADMIN as string,
          name: "superadmin",
        },
        {
          id: process.env.ROLE_USER as string,
          name: "user",
        },
      ],
    }),
  );
