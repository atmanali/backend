/*
  Warnings:

  - You are about to drop the column `action` on the `permissions` table. All the data in the column will be lost.
  - You are about to drop the column `collection` on the `permissions` table. All the data in the column will be lost.
  - You are about to drop the column `permissions` on the `permissions` table. All the data in the column will be lost.
  - You are about to drop the column `presets` on the `permissions` table. All the data in the column will be lost.
  - You are about to drop the column `validation` on the `permissions` table. All the data in the column will be lost.
  - You are about to drop the `newPermissionsModel` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[action_table]` on the table `permissions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ok";

-- AlterTable
ALTER TABLE "permissions" DROP COLUMN "action",
DROP COLUMN "collection",
DROP COLUMN "permissions",
DROP COLUMN "presets",
DROP COLUMN "validation",
ADD COLUMN     "action_table" TEXT,
ALTER COLUMN "fields" SET DEFAULT '*';

-- DropTable
DROP TABLE "newPermissionsModel";

-- CreateIndex
CREATE UNIQUE INDEX "permissions_action_table_key" ON "permissions"("action_table");
