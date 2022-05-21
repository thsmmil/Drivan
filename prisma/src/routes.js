import { Router } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const router = Router();
router.post("/passageiro", async (req, res) => {
    try {
        const { CPF, Nome, Email, Telefone } = req.body

        const user = await prisma.passageiro.create({
            data: {
                CPF,
                Nome,
                Email,
                Telefone,
            },
        });
        return res.json(user);
    } catch (error) {

    }


});

router.post("/motorista", async (req, res) => {
    try {
        const { CPF, Nome, Email, Telefone } = req.body

        const user = await prisma.motorista.create({
            data: {
                CPF,
                Nome,
                Email,
                Telefone,
            },
        });
        return res.json(user);
    } catch (error) {

    }


});

router.post("/carro", async (req, res) => {
    try {
        const { Modelo, Marca, Ano, Cor } = req.body

        const car = await prisma.carro.create({
            data: {
                Modelo,
                Marca,
                Ano,
                Cor
            },
        });
        return res.json(car);
    } catch (error) {

    }


});



export { router }