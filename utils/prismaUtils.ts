import { Prisma } from "@prisma/client";

export const handlePrismaException = (exception: any) => {
  exception instanceof Prisma.PrismaClientKnownRequestError &&
    console.log({
      error_name: exception.name,
      error_code: exception.code,
      error_meta: exception.meta,
    });

  exception instanceof Prisma.PrismaClientUnknownRequestError &&
      console.log('on est perdu')

  return undefined;
};
