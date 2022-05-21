-- CreateTable
CREATE TABLE `Passageiro` (
    `CPF` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Telefone` VARCHAR(191) NOT NULL,
    `CriadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `AtualizadoEm` DATETIME(3) NOT NULL,
    `RemovidoEm` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Passageiro_Email_key`(`Email`),
    PRIMARY KEY (`CPF`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Carro` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Modelo` VARCHAR(191) NOT NULL,
    `Marca` VARCHAR(191) NOT NULL,
    `Ano` INTEGER NOT NULL,
    `Cor` VARCHAR(191) NOT NULL,
    `motoristaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Motorista` (
    `CPF` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Telefone` VARCHAR(191) NOT NULL,
    `CriadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `AtualizadoEm` DATETIME(3) NOT NULL,
    `RemovidoEm` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Motorista_Email_key`(`Email`),
    PRIMARY KEY (`CPF`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Viagem` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `HoraSaida` DATETIME(3) NOT NULL,
    `Valor` DECIMAL(65, 30) NOT NULL,
    `DataIda` DATETIME(3) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PassageiroOnViagem` (
    `passageiroId` VARCHAR(191) NOT NULL,
    `viagemId` INTEGER NOT NULL,
    `reservadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `IsConcluido` DATETIME(3) NOT NULL,
    `concluidoEm` DATETIME(3) NOT NULL,
    `avaliacao` INTEGER NOT NULL,

    PRIMARY KEY (`passageiroId`, `viagemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MotoristaOnViagem` (
    `motoristaId` VARCHAR(191) NOT NULL,
    `viagemId` INTEGER NOT NULL,
    `reservadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `IsConcluido` DATETIME(3) NOT NULL,
    `concluidoEm` DATETIME(3) NOT NULL,
    `avaliacao` INTEGER NOT NULL,

    PRIMARY KEY (`motoristaId`, `viagemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estado` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cidade` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,
    `estadoId` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Logradouro` VARCHAR(191) NOT NULL,
    `PontoReferencia` VARCHAR(191) NOT NULL,
    `cidadeId` INTEGER NOT NULL,
    `numero` INTEGER NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Carro` ADD CONSTRAINT `Carro_motoristaId_fkey` FOREIGN KEY (`motoristaId`) REFERENCES `Motorista`(`CPF`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PassageiroOnViagem` ADD CONSTRAINT `PassageiroOnViagem_passageiroId_fkey` FOREIGN KEY (`passageiroId`) REFERENCES `Passageiro`(`CPF`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PassageiroOnViagem` ADD CONSTRAINT `PassageiroOnViagem_viagemId_fkey` FOREIGN KEY (`viagemId`) REFERENCES `Viagem`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MotoristaOnViagem` ADD CONSTRAINT `MotoristaOnViagem_motoristaId_fkey` FOREIGN KEY (`motoristaId`) REFERENCES `Motorista`(`CPF`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MotoristaOnViagem` ADD CONSTRAINT `MotoristaOnViagem_viagemId_fkey` FOREIGN KEY (`viagemId`) REFERENCES `Viagem`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cidade` ADD CONSTRAINT `Cidade_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `Estado`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_cidadeId_fkey` FOREIGN KEY (`cidadeId`) REFERENCES `Cidade`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
