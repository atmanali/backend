import { Router } from 'express';
import { createAuthentication } from '../services/authentication';

const authenticationRoute = Router();
authenticationRoute.post('/', async (req, res, next) => {
    await createAuthentication(req.body);
    next();
})

export default authenticationRoute;