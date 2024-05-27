import prisma from '../prisma/prismaClient';
import { Prisma } from '@prisma/client';

export const createClasses = async (classesToCreate: Prisma.classesCreateInput[]) => {
    console.log('———> createClasses: start');
    console.log('classesToCreate', classesToCreate);
    classesToCreate.map( async (classElement) => {
        try {
            await prisma.classes.create({
                data: {
                    ...classElement
                    /*
                        todo: manage id autoincrement
                     */
                }
            }).then(() => console.log(`class created: ${classElement.name}`))
        } catch (exception) {
            (exception instanceof Prisma.PrismaClientKnownRequestError) &&
            console.log(`class not created: ${classElement.name}\nerror message: ${exception.message}`);
        }
    })
}