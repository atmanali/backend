import { Router } from 'express';
import { accountability } from '../services/authentication';

const accountabilityRoute = Router();
accountabilityRoute.use('/', async (req, res, next) => {
    const role = await accountability({
        username: req.headers.requesting_user as string,
    })
    console.log(role);
    next();
})

export default accountabilityRoute;