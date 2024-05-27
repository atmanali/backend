import prisma from '../prisma/prismaClient';


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


export const createPermissionsFor = async (
    role: string,
    permissions: { }
) => {
    // todo: needs to check if permissions already exist
    const role_id = role;
    const createdPermissionsId = await prisma.permissions.create({
        // @ts-ignore
        data: {
            role_id: role_id,
            ...permissions
        }
    })
    return createdPermissionsId.id;
}
