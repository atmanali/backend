/*
  Warnings:

  - Made the column `action` on table `permissions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "permissions" ALTER COLUMN "action" SET NOT NULL,
ALTER COLUMN "action" SET DEFAULT 'all';
