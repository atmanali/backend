/*
  Warnings:

  - Made the column `role_id` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_role_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
