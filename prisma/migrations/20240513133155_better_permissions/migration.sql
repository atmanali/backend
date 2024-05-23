/*
  Warnings:

  - You are about to drop the column `permissions` on the `newPermissionsModel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[action_table]` on the table `newPermissionsModel` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "newPermissionsModel_permissions_key";

-- AlterTable
ALTER TABLE "newPermissionsModel" DROP COLUMN "permissions",
ADD COLUMN     "action_table" TEXT,
ADD COLUMN     "fields" TEXT NOT NULL DEFAULT '*';

-- CreateIndex
CREATE UNIQUE INDEX "newPermissionsModel_action_table_key" ON "newPermissionsModel"("action_table");
