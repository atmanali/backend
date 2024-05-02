import prisma from '../prismaClient';
import { Prisma } from '@prisma/client';

export const createRoles = async () => {
    try{
        await prisma.roles.createMany({
            data: [
                {
                    id: process.env.ROLE_ADMIN as string,
                    description: "administrator",
                },
                {
                    id: process.env.ROLE_USER_ADMIN as string,
                    description: "user_administrator",
                },
                {
                    id: process.env.ROLE_TEACHER as string,
                    description: "teacher",
                },
                {
                    id: process.env.ROLE_STUDENT as string,
                    description: "student",
                },
            ]
        })
    } catch (exception) {
        (exception instanceof Prisma.PrismaClientKnownRequestError) &&
            console.log('roles', exception.code)
    }
}