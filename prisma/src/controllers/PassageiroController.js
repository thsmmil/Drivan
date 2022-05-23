import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async createPassenger(req, res) {
        try {
            const { CPF, Nome, Email, Telefone } = req.body;
            let user = await prisma.passageiro.findUnique({
                where: {
                    Email
                }
            })
            if (user) {
                return res.json({ error: "Email já cadastrado" })
            }
            user = await prisma.passageiro.create({
                data: {
                    CPF,
                    Nome,
                    Email,
                    Telefone
                },
            });
            return res.json(user);
        } catch (error) {
            return res.json({error: error.message})
        }
    },
    async findAllPassenger(req, res) {
        try {
            const users = await prisma.passageiro.findMany();
            return res.json(users);
        } catch (error) {
            return res.json({ error })
        }
    },
    async findPassenger(req, res) {
        const { id } = req.params;
        const user = await prisma.passageiro.findUnique({
            where: {
                CPF: id
            }
        });
        user ? res.json(user) : res.json({ error: "Passageiro não encontrado" })
    },
    async updatePassenger(req, res) {
        const { id } = req.params;
        const { Nome, Email, Telefone } = req.body;

        try {
            let user = await prisma.passageiro.findUnique({ where: { CPF: id } })
            if (!user)
                return res.json({ error: "Passageiro não encontrado" })
            user = await prisma.passageiro.update({
                where: { CPF: id },
                data: {
                    Nome,
                    Email,
                    Telefone,
                    AtualizadoEm: new Date()
                }
            })
            return res.json(user)
        } catch (error) {
            return res.json({ error : error.message })
        }
    },
    async deletePassenger(req, res) {
        try {
            const { id } = req.params;
            const user = await prisma.passageiro.findUnique({
                where: {
                    CPF: id
                }
            });
            if (!user) res.json({ error: "Passageiro não encontrado" })
            await prisma.passageiro.delete({
                where: { CPF: id }
            })
            return res.json({ message: "Passageiro excluído com sucesso" })
        } catch (error) {
            return res.json({ error })
        }
    }
}