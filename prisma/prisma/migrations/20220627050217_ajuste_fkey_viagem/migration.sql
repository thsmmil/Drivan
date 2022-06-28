/*
  Warnings:

  - You are about to drop the column `viagemId` on the `endereco` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[enderecoId]` on the table `Viagem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Assentos` to the `Carro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enderecoId` to the `Viagem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `endereco` DROP FOREIGN KEY `Endereco_viagemId_fkey`;

-- AlterTable
ALTER TABLE `carro` ADD COLUMN `Assentos` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `endereco` DROP COLUMN `viagemId`;

-- AlterTable
ALTER TABLE `viagem` ADD COLUMN `enderecoId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Viagem_enderecoId_key` ON `Viagem`(`enderecoId`);

-- AddForeignKey
ALTER TABLE `Viagem` ADD CONSTRAINT `Viagem_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `Endereco`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
