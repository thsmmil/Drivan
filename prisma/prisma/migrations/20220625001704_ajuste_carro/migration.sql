/*
  Warnings:

  - Added the required column `Placa` to the `Carro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carro` ADD COLUMN `Placa` VARCHAR(191) NOT NULL;
