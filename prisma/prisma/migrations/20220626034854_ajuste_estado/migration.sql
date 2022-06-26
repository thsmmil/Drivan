/*
  Warnings:

  - Added the required column `Uf` to the `Estado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estado` ADD COLUMN `Uf` VARCHAR(191) NOT NULL;
