import prisma from '../prismaClient';
import { Prisma } from '@prisma/client';

export const createClasses = async () => {
    const classesToCreate: {id: number, name: string}[] = [];

    for (var index=0 ; index<5 ; index++) {
        classesToCreate.push({id: index+1 , name: `class${index+1}`})
    }
    try{
        await prisma.classes.createMany({data: classesToCreate})
    } catch (exception) {
        (exception instanceof Prisma.PrismaClientKnownRequestError) &&
        console.log(exception.code)
    }
}