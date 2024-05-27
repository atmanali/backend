import { Prisma } from '@prisma/client';
import prisma from '../../prisma/prismaClient';
import { handlePrismaException } from '../../utils/prismaUtils';

export const createAuthentication = async (
    authenticationToCreate: Prisma.authenticationCreateInput,
) => {
    try {
        const output = await prisma.authentication.create({
            data: {
                username: authenticationToCreate.username,
                password: authenticationToCreate.password,
                role: authenticationToCreate.role,
            },
        });
        return output;
    } catch (exception) {
        handlePrismaException(exception);
    }
};