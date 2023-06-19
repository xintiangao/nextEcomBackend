/*
  Warnings:

  - You are about to drop the column `name` on the `Photos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Photos" DROP COLUMN "name",
ALTER COLUMN "title" SET DATA TYPE TEXT;
