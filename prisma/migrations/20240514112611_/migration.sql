/*
  Warnings:

  - You are about to drop the column `action_table` on the `permissions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[role_id,action,collection]` on the table `permissions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "permissions_action_table_key";

-- AlterTable
ALTER TABLE "permissions" DROP COLUMN "action_table",
ADD COLUMN     "action" TEXT,
ADD COLUMN     "collection" TEXT,
ALTER COLUMN "fields" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "permissions_role_id_action_collection_key" ON "permissions"("role_id", "action", "collection");
