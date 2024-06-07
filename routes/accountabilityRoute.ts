import { Router } from 'express';
import prisma from '../prisma/prismaClient';
import { getPermissionsFor } from '../services/permissions/get';

const accountabilityRoute = Router();
accountabilityRoute.use('/', async (req, res, next) => {
    /*
        todo: use credentials to determine the user requesting the server
     */

    //console.log('req.headers.requesting_user', req.headers.requesting_user);
    const requesting_user = await prisma.users.findFirst({
        where: {
            username: req.headers.requesting_user as string
        }
    });
    //console.log('requesting_user', requesting_user);

    const permissions = await getPermissionsFor(requesting_user?.role_id as string)
    //console.log('permissions', permissions);
    next();
})

export default accountabilityRoute;