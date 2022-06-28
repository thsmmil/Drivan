/*
  Warnings:

  - You are about to drop the column `numero` on the `endereco` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `endereco` DROP COLUMN `numero`,
    ADD COLUMN `Numero` INTEGER NULL;
