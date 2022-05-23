/*
  Warnings:

  - You are about to alter the column `avaliacao` on the `motoristaonviagem` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `avaliacao` on the `passageiroonviagem` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - Changed the type of `IsConcluido` on the `motoristaonviagem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `IsConcluido` on the `passageiroonviagem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `motorista` MODIFY `AtualizadoEm` DATETIME(3) NULL,
    MODIFY `RemovidoEm` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `motoristaonviagem` ADD COLUMN `iniciadoEm` DATETIME(3) NULL,
    DROP COLUMN `IsConcluido`,
    ADD COLUMN `IsConcluido` BOOLEAN NOT NULL,
    MODIFY `concluidoEm` DATETIME(3) NULL,
    MODIFY `avaliacao` DOUBLE NULL;

-- AlterTable
ALTER TABLE `passageiro` MODIFY `AtualizadoEm` DATETIME(3) NULL,
    MODIFY `RemovidoEm` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `passageiroonviagem` ADD COLUMN `iniciadoEm` DATETIME(3) NULL,
    DROP COLUMN `IsConcluido`,
    ADD COLUMN `IsConcluido` BOOLEAN NOT NULL,
    MODIFY `concluidoEm` DATETIME(3) NULL,
    MODIFY `avaliacao` DOUBLE NULL;
