import { Router } from 'express';
import { createUsers } from '../services/users';

const usersRoute = Router();
usersRoute.post('/', async (req, res, next) => {
    await createUsers(req.body);
    next();
})


export default usersRoute