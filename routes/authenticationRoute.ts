import { Router } from 'express';
import { createAuthentication } from '../services/authentication';
import prisma from '../prisma/prismaClient';

const authenticationRoute = Router();
authenticationRoute.post('/', async (req, res, next) => {
    await createAuthentication(req.body);
    next();
})
authenticationRoute.post('/login', async (req, res) => {
    const {username, password} = req.body;
    try {
        const ok = await prisma.authentication.findFirst({
            where:{
                username: username,
                password: password
            }
        })

        console.log(ok);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default authenticationRoute;