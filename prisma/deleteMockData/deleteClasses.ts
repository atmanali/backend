import { PrismaQuery } from "../../utils/prismaUtils";
import prisma from "../prismaClient";

export const deleteClasses = async () =>
  await PrismaQuery(() =>
    prisma.classes.deleteMany({
      where: {
        OR: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      },
    }),
  );
