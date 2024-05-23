import { UserModel } from '../model/UserModel';
import prisma from '../prisma/prismaClient';
import { PermissionModel } from '../model/PermissionModel';


export const getPermissionsFor = async (
    role: string | Partial<UserModel>,
    collection?: string,
    action?: string
) => {
    const role_id = typeof role==='string' ? role : role.role_id;

    const permissions = await prisma.permissions.findMany({
        where: {
            role_id: role_id,
            collection: collection,
            action: action
        },
    })
    return permissions;
}


export const isPermissionExisting = async (
    role: string | Partial<UserModel>,
    permissions: Omit<PermissionModel, 'id'|'role_id'>
) => {
    const yes = await prisma.permissions.findFirst()
}

export const createPermissionsFor = async (
    role: string | Partial<UserModel>,
    permissions: Omit<PermissionModel, 'id'|'role_id'>
) => {
    // todo: needs to check if permissions already exist
    const role_id = typeof role==='string' ? role : role.role_id;
    const createdPermissionsId = await prisma.permissions.create({
        // @ts-ignore
        data: {
            role_id: role_id,
            ...permissions
        }
    })
    return createdPermissionsId.id;
}
