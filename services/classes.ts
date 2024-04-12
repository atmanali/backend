import prisma from '../prisma/prismaClient';
import { ClassModel } from '../model/ClassModel';
import { Prisma } from '@prisma/client';

export const createClasses = async (classesToCreate: ClassModel[]) => {
    console.log('———> createClasses: start');
    console.log('classesToCreate', classesToCreate);
    classesToCreate.map( async (classElement: ClassModel) => {
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