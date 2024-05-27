import { Router } from 'express';
import { createUser } from '../services/users/create';

const usersRoute = Router();
usersRoute.post('/', async (req, res, next) => {
    const { role } = req.body;
    const userCreated = await createUser({
        ...req.body,
        role_id: process.env.ROLE_ADMIN as string,
    });
    res.sendStatus(202);
})

usersRoute.get('/', async (req, res) => {
    const { username } = req.query;
    console.log('requested_username', username);
    res.sendStatus(200);
})


export default usersRoute