import express from 'express';
import authenticationRoute from './routes/authenticationRoute';
import usersRoute from './routes/usersRoute';
import classesRoute from './routes/classesRoute';
import prisma from './prisma/prismaClient';
import mockDataRoute from './routes/mockDataRoute';
import accountabilityRoute from './routes/accountabilityRoute';


async function main() {
    const app = express();
    const PORT = process.env.PORT;
    app.use(express.json());
    app.use('/', accountabilityRoute);

    app.use('/authentication', authenticationRoute);
    app.use('/users', usersRoute);
    app.use('/classes', classesRoute);
    app.use('/mockData', mockDataRoute);



    app.listen(PORT, ()=>{
        console.log('Server started on port', PORT);
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })