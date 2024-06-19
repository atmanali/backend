import {v4 as uuid} from "uuid";
import prisma from "../prismaClient";
import { PrismaQuery } from "../../utils/prismaUtils";

export const createMockUsers = async () => {
  return await PrismaQuery(() =>
    prisma.users.createMany({
      data: [
        {
          id: uuid(),
          username: "admin",
          first_name: "main",
          last_name: "admin",
          roles_id: process.env.ROLE_ADMIN as string,
          address: "private",
          password: "AdminPasTa3LéOufs",
          passwordAsString: "AdminPasTa3LéOufs",
        },
        {
          id: uuid(),
          username: "superadmin",
          first_name: "super",
          last_name: "admin",
          address: "private",
          roles_id: process.env.ROLE_SUPER_ADMIN as string,
          password: "AdminTa3LéOufs",
          passwordAsString: "AdminTa3LéOufs",
        },
        {
          id: uuid(),
          username: "basicUser",
          first_name: "basic",
          last_name: "user",
          address: "private",
          roles_id: process.env.ROLE_USER as string,
          password: "",
          passwordAsString: "",
        },
      ],
    }),
  );
};
