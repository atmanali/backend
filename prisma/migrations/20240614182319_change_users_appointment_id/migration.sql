/*
  Warnings:

  - The primary key for the `users_appointment` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "users_appointment" DROP CONSTRAINT "users_appointment_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_appointment_pkey" PRIMARY KEY ("id");
