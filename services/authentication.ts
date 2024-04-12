import { AuthenticationModel } from '../model/AuthenticationModel';
import prisma from '../prisma/prismaClient';
import { Prisma } from '@prisma/client';


export async function accountability (authentication: Omit<AuthenticationModel, 'password'>) {
    const role = (authentication.username != undefined) && await prisma.users.findFirst({
        select: {
            role_id: true,
        },
        where: {
            username: authentication.username
        }
    });
    const permissions = getPermissions( role );
    return role;
}
export const createAuthentication = async (authenticationsToCreate: AuthenticationModel[]) => {
    authenticationsToCreate.map(async (authenticationToCreate: AuthenticationModel) => {
        try{
            await prisma.authentication.create({
                data: {
                    ...authenticationToCreate
                }
            }).then(() => console.log(`authentication created: ${authenticationToCreate.username}`))
        }catch (exception) {
            (exception instanceof Prisma.PrismaClientKnownRequestError) &&
            console.log(`authentication not created: ${authenticationToCreate.username}\nerror message: ${exception.message}`);
        }
    })
}




const getPermissions = (role: false | { role_id: string } | null) => role;