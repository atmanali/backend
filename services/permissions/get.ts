import prisma from '../../prisma/prismaClient';


export const getPermissionsFor = async (
    role: string,
    collection?: string,
    action?: string
) => {
    const role_id = role;

    const permissions = await prisma.permissions.findMany({
        where: {
            role_id: role_id,
            collection: collection,
            action: action
        },
    })
    return permissions;
}
