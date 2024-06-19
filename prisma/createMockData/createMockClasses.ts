import prisma from "../prismaClient";
import { Prisma } from "@prisma/client";
import { PrismaQuery } from "../../utils/prismaUtils";

export const createMockClasses = async () => {
  const classesToCreate: { id: number; name: string }[] = [];
  for (var index = 0; index < 5; index++) {
    classesToCreate.push({ id: index + 1, name: `class${index + 1}` });
  }

  return await PrismaQuery(() =>
    prisma.classes.createMany({ data: classesToCreate }),
  );
};
