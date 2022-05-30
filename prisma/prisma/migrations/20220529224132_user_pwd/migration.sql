/*
  Warnings:

  - Added the required column `Senha` to the `Motorista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Senha` to the `Passageiro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `motorista` ADD COLUMN `Senha` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `passageiro` ADD COLUMN `Senha` VARCHAR(191) NOT NULL;
