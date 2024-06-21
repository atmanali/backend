/*
  Warnings:

  - You are about to drop the column `from` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `messages` table. All the data in the column will be lost.
  - Added the required column `status` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `content` on the `messages` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "messages" DROP COLUMN "from",
DROP COLUMN "to",
ADD COLUMN     "status" TEXT NOT NULL,
DROP COLUMN "content",
ADD COLUMN     "content" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "notifications" (
    "id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),
    "user_created" TEXT,
    "user_updated" TEXT,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);
