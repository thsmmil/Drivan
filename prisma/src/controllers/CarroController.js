import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async createCar(req, res) {
        try {
            const { Modelo, Marca, Placa, Ano, Cor, mostoristaId } = req.body;

            const carro = await prisma.carro.create({
                data: {
                    Modelo,
                    Marca,
                    Placa,
                    Ano,
                    Cor
                },
                include: {
                    mostorista
                }
            });
            return res.json(carro);
        } catch (error) {
            return res.json({ error: error.message })
        }
    },
    async findAllCar(req, res) {
        try {
            const cars = await prisma.carro.findMany();
            return res.json(users);
        } catch (error) {
            return res.json({ error: error.message })
        }
    },
    async findCar(req, res) {
        const { Id } = req.params;
        const car = await prisma.carro.findUnique({
            where: {
                Id
            }
        });
        user ? res.json(car) : res.json({ error: "Carro não encontrado" })
    },
    async updateCar(req, res) {
        const { Id } = req.params;
        const { Modelo, Marca, Placa, Ano, Cor } = req.body;

        try {
            let car = await prisma.carro.findUnique({ where: { Id } })
            if (!car)
                return res.json({ error: "Carro não encontrado" })
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
            return res.json({ error: error.message })
        }
    },
    async deleteCar(req, res) {
        try {
            const { Id } = req.params;
            const car = await prisma.carro.findUnique({
                where: {
                    Id
                }
            });
            if (!car) res.json({ error: "Carro não encontrado" })
            await prisma.motorista.delete({
                where: { Id }
            })
            return res.json({ message: "Carro excluído com sucesso" })
        } catch (error) {
            return res.json({ error })
        }
    }

}