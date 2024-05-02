import { Router } from 'express';
import { createUsers } from '../services/users';

const usersRoute = Router();
usersRoute.post('/', async (req, res, next) => {
    await createUsers(req.body);
    next();
})

usersRoute.get('/:username', async (req, res) => {
    const username = req.params.username;
    console.log('requested_username', username);
    res.sendStatus(200);
})


export default usersRoute