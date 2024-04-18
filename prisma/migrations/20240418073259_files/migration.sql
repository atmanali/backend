/*
  Warnings:

  - You are about to drop the column `type` on the `files` table. All the data in the column will be lost.
  - Added the required column `blob` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_size` to the `files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mime_type` to the `files` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "files" DROP COLUMN "type",
ADD COLUMN     "blob" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "file_size" INTEGER NOT NULL,
ADD COLUMN     "mime_type" TEXT NOT NULL,
ADD COLUMN     "modified_by" TEXT,
ADD COLUMN     "modified_on" TIMESTAMP(3);
