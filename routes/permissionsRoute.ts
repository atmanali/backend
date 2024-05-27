import { Router } from 'express';
import { createPermissionsFor } from '../services/permissions';
import { getUser } from '../services/users/get';

const permissionsRoute = Router();
permissionsRoute.post('/', async (req, res, next) => {
    const { username, permissions} = req.query;
    //console.log('permissions\t', JSON.parse(permissions as string));

    try{
        const user = await getUser(username as string);
        console.log(user?.username);
        const permissionsCreated = await createPermissionsFor(
            user?.role_id as string,
            // @ts-ignore
            JSON.parse(permissions as string)
        );
        res.status(200).json({id: permissionsCreated});
    } catch (e) { console.log('## error\n', e); }

    next();
})

export default permissionsRoute;