import { UserModel } from '../model/UserModel';
import prisma from '../prisma/prismaClient';
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client';

export const createUsers = async ( usersToCreate: Partial<UserModel>[] ) => {
    usersToCreate.map( async (user: Partial<UserModel>) => {
        try {
            await prisma.users.create({
                // @ts-ignore
                data: {
                    id: uuidv4(),
                    ...user
                }
            }).then(() => console.log(`user created: ${user.username}`))
        } catch (exception) {
            (exception instanceof Prisma.PrismaClientKnownRequestError) &&
            console.log(`user not created: ${user.username}\nerror message: ${exception.message}`);
        }
    })
}


export const getUser = async ( username: string ) => {
    if (!username) return ;
    return prisma.users.findFirst({ where: { username: username } })
}