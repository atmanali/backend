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
        const authenticated = await prisma.authentication.findFirst({
            where:{
                username: username,
                password: password
            }
        })
        console.log(authenticated);

        let existingUser = null;
        if(authenticated) {
            existingUser = await prisma.users.findFirst({
                where:{
                    username: username,
                }
            })
            console.log(existingUser);
            if(existingUser) res.status(200).json({ data: true });
            else res.status(201).json({});
        }
        else res.status(403).json({ message: "mauvais identifiants" });
        // todo: send cookie to front

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default authenticationRoute;