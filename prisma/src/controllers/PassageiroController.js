import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default {
    async createPassenger(req, res) {
        try {
            const { CPF, Nome, Email, Telefone, Senha } = req.body;
            let user = await prisma.passageiro.findUnique({
                where: {
                    Email
                }
            })
            if (user) {
                return res.json({ error: "Email já cadastrado" })
            }
            const hashedPassword = await bcrypt.hash(Senha, 10);
            user = await prisma.passageiro.create({
                data: {
                    CPF,
                    Nome,
                    Email,
                    Senha: hashedPassword,
                    Telefone,
                    AtualizadoEm: null
                },
            });
            return res.json(user);
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findAllPassenger(req, res) {
        try {
            const users = await prisma.passageiro.findMany();
            return res.json(users);
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findPassenger(req, res) {
        const { id } = req.params;
        const user = await prisma.passageiro.findUnique({
            where: {
                Email: id
            }
        });
        user ? res.json(user) : res.status(404).send({ error: "Passageiro não encontrado" })
    },
    async updatePassenger(req, res) {
        const { Id, Nome, Email, Telefone, Senha } = req.body;

        try {
            let user = await prisma.passageiro.findUnique({ where: { CPF: Id } })
            if (!user)
                return res.status(404).send({ error: "Passageiro não encontrado" });
            if (await bcrypt.compare(Senha, user.Senha)) {
                user = await prisma.passageiro.update({
                    where: { CPF: Id },
                    data: {
                        Nome,
                        Email,
                        Telefone,
                        Senha: user.Senha
                    }
                })
            } else {
                let hashedPassword = await bcrypt.hash(Senha, 10)
                user = await prisma.passageiro.update({
                    where: { CPF: Id },
                    data: {
                        Nome,
                        Email,
                        Telefone,
                        Senha: hashedPassword
                    }
                })
            }

            return res.json(user)
        } catch (error) {
            return res.status(500).send({ error: error.message })
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
            if (!user) return res.status(404).send({ error: "Passageiro não encontrado" })
            await prisma.passageiro.delete({
                where: { CPF: id }
            })
            return res.sendStatus(204)
        } catch (error) {
            return res.status(500).send({ error })
        }
    }
}