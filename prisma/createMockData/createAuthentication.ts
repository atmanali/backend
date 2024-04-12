import prisma from '../prismaClient';
import { Prisma } from '@prisma/client';

export const createAuthentication = async () => {
    try{
        await prisma.authentication.createMany({
            data: [
                {
                    username: 'admin',
                    password: 'admin',
                },
                {
                    username: 'teacher',
                    password: 'teacher',
                },
                {
                    username: 'student',
                    password: 'student',
                },
                {
                    username: 'user_admin',
                    password: 'user_admin',
                },
                {
                    username: 'atmanali',
                    password: 'atmanali',
                }
            ]
        })
    } catch (exception) {
        (exception instanceof Prisma.PrismaClientKnownRequestError) &&
        console.log(exception.code)
    }
}