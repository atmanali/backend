import prisma from '../prismaClient';
import { Prisma } from '@prisma/client';

export const createRoles = async () => {
    try{
        await prisma.roles.createMany({
            data: [
                {
                    id: process.env.ROLE_ADMIN as string,
                    description: 'Administrator',
                },
                {
                    id: process.env.ROLE_USER_ADMIN as string,
                    description: 'UserAdministrator',
                },
                {
                    id: process.env.ROLE_TEACHER as string,
                    description: 'Teacher',
                },
                {
                    id: process.env.ROLE_STUDENT as string,
                    description: 'Student',
                },
            ]
        })
    } catch (exception) {
        (exception instanceof Prisma.PrismaClientKnownRequestError) &&
            console.log(exception.code)
    }
}