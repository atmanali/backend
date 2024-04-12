import { Router } from 'express';
import createMockDate from '../prisma/createMockData';

const mockDataRoute = Router();

mockDataRoute.get('/', async (req, res, next) => {
    await createMockDate();
    next();
})

export default mockDataRoute;