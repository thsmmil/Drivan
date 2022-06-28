import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async createCar(req, res) {
        try {
            const { Modelo, Marca, Placa, Ano, Cor, CPF, Assentos } = req.body;

            const carro = await prisma.carro.create({
                data: {
                    Modelo,
                    Assentos,
                    Marca,
                    Placa,
                    Ano,
                    Cor,
                    mostorista: { connect: { CPF } },
                }
            });
            return res.status(201).send(carro);
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findAllCarById(req, res) {
        try {
            const {Id} = req.params;
            const user = await prisma.motorista.findUnique({ where: { CPF: Id } })
            if (!user) return res.status(404).send({ error: "Este usuário não existe" });
            const cars = await prisma.carro.findMany(
                {
                    where: { motoristaId: Id },
                    include: {
                        mostorista: {
                            select: {
                                Nome: true,
                                Telefone: true
                            }
                        }
                    }
                }
            );
            cars ? res.json(cars) : res.status(404).send({ error: "Este usuário não possui nenhum carro" });
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findAllCar(req, res) {
        try {
            const cars = await prisma.carro.findMany(
                {
                    include: {
                        mostorista: {
                            select: {
                                Nome: true,
                                Telefone: true
                            }
                        }
                    }
                }
            );
            cars ? res.json(cars) : res.status(404).send({ error: "Não existem carros cadastrados no sistema" });
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findCar(req, res) {
        try {
            const { Id } = req.params;
            const car = await prisma.carro.findUnique({
                where: {
                    Id: parseInt(Id)
                },
                include: {
                    mostorista: {
                        select: {
                            Nome: true,
                            Telefone: true
                        }
                    }
                }
            });
            car ? res.json(car) : res.status(404).send({ error: "Carro não encontrado" });
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }

    },
    async updateCar(req, res) {
        const { Id,Modelo, Marca, Placa, Ano, Cor } = req.body;

        try {
            let car = await prisma.carro.findUnique({ where: { Id } })
            if (!car)
                return res.status(404).send({ error: "Carro não encontrado" })
            car = await prisma.carro.update({
                where: { Id },
                data: {
                    Modelo,
                    Marca,
                    Placa,
                    Ano,
                    Cor
                }
            })
            return res.json(car)
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async deleteCar(req, res) {
        try {
            const { Id } = req.params;
            const car = await prisma.carro.findUnique({
                where: {
                    Id : parseInt(Id)
                }
            });
            if (!car) return res.status(404).send({ error: "Carro não encontrado" })
            await prisma.carro.delete({
                where: { Id: parseInt(Id) }
            })
            return res.sendStatus(204)
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    }

}