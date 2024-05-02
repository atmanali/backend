import { Router } from 'express';
import { accountability } from '../services/authentication';
import prisma from '../prisma/prismaClient';
import { getPermissionsFor } from '../services/permissions';
import { UserModel } from '../model/UserModel';

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
    }) as UserModel;
    //console.log('requesting_user', requesting_user);

    const permissions = await getPermissionsFor(requesting_user)
    //console.log('permissions', permissions);
    next();
})

export default accountabilityRoute;