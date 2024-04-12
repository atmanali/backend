import prisma from '../prismaClient';
import { Prisma } from '@prisma/client';

export const createUsers = async () => {
    try{
        await prisma.users.createMany({
            data: [
                {
                    id: '4F756FB1-2AEF-4955-88BB-9E14D1D80F28',
                    username: 'admin',
                    first_name: 'main',
                    last_name: 'admin',
                    role_id: process.env.ROLE_ADMIN as string,
                },
                {
                    id: '835CB1EB-A487-4B4A-A53E-71DB60443E99',
                    username: 'user_admin',
                    first_name: 'user',
                    last_name: 'admin',
                    role_id: process.env.ROLE_USER_ADMIN as string,
                },
                {
                    id: '95F397AF-0E2D-42DE-BDDA-1804B751DA48',
                    username: 'teacher',
                    first_name: 'tea',
                    last_name: 'cher',
                    role_id: process.env.ROLE_TEACHER as string,
                },
                {
                    id: '8D8045DE-DE91-4896-9029-1E91777CA6E3',
                    username: 'student',
                    first_name: 'stu',
                    last_name: 'dent',
                    role_id: process.env.ROLE_STUDENT as string,
                },
                {
                    id: 'af4fe81f-a89f-400e-8389-7efb40f9e571',
                    username: 'atmanali',
                    first_name: 'atman',
                    last_name: 'ali',
                    role_id: process.env.ROLE_ADMIN as string,
                },
            ]
        })
    } catch (exception) {
        (exception instanceof Prisma.PrismaClientKnownRequestError) &&
        console.log(exception.code)
    }
}