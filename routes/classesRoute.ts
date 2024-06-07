import { Router } from 'express';
import { createClasses } from '../services/classes/create';

const classesRoute = Router();
classesRoute.post('/', async (req, res, next) => {
    console.log('posted to classes route');
    await createClasses(req.body);
    next();
})

export default classesRoute;