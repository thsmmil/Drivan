/*
  Warnings:

  - A unique constraint covering the columns `[viagemId]` on the table `Endereco` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `endereco` ADD COLUMN `viagemId` INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `Endereco_viagemId_key` ON `Endereco`(`viagemId`);

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_viagemId_fkey` FOREIGN KEY (`viagemId`) REFERENCES `Viagem`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
