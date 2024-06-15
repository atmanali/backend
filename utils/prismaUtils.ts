import { Prisma } from "@prisma/client";
const handlePrismaException = (exception: any) => {
  if (exception instanceof Prisma.PrismaClientKnownRequestError) {
    console.log({ stack: exception.stack, meta: exception.meta });
    return {
      error_name: exception.name,
      error_code: exception.code,
      error_meta: exception.meta,
    };
  }

  if (exception instanceof Prisma.PrismaClientUnknownRequestError) {
    console.log({ stack: exception.stack });
    return {
      error_name: exception.name,
    };
  }

  return { error_name: "unknown error" };
};

export async function PrismaQuery(func: Function) {
  try {
    return await func();
  } catch (exception) {
    return handlePrismaException(exception);
  }
}
