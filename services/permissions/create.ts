import prisma from "../../prisma/prismaClient";

export const createPermissions = async (role: string, permissions: {}) => {
  // todo: needs to check if permissions already exist
  const role_id = role;
  const createdPermissionsId = await prisma.permissions.create({
    // @ts-ignore
    data: {
      role_id: role_id,
      ...permissions,
    },
  });
  return createdPermissionsId.id;
};
