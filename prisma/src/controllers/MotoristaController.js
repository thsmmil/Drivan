import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default {
    async createDriver(req, res) {
        try {
            const { CPF, Nome, Email, Telefone, Senha } = req.body;
            let user = await prisma.motorista.findUnique({
                where: {
                    Email
                }
            })
            if (user) {
                return res.json({ error: "Email já cadastrado" })
            }
            const hashedPassword = await bcrypt.hash(Senha, 10);
            user = await prisma.motorista.create({
                data: {
                    CPF,
                    Nome,
                    Email,
                    Telefone,
                    Senha: hashedPassword,
                    AtualizadoEm: null
                },
            });
            return res.json(user);
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findAllDriver(req, res) {
        try {
            const users = await prisma.motorista.findMany();
            return res.json(users);
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findDriver(req, res) {
        const { id } = req.params;
        const user = await prisma.motorista.findUnique({
            where: {
                Email: id
            }
        });
        user ? res.json(user) : res.status(404).send({ error: "Motorista não encontrado" })
    },
    async updateDriver(req, res) {
        const { Id ,Nome, Email, Telefone, Senha } = req.body;

        try {
            let user = await prisma.motorista.findUnique({ where: { CPF: Id } })
            if (!user)
                return res.status(404).send({ error: "Motorista não encontrado" })
            const hashedPassword = await bcrypt.hash(Senha, 10);
            if (await bcrypt.compare(Senha, user.Senha)) {
                user = await prisma.motorista.update({
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
                user = await prisma.motorista.update({
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
    async deleteDriver(req, res) {
        try {
            const { id } = req.params;
            const user = await prisma.motorista.findUnique({
                where: {
                    CPF: id
                }
            });
            if (!user) return res.status(404).send({ error: "Motorista não encontrado" })
            await prisma.motorista.delete({
                where: { CPF: id }
            })
            return res.sendStatus(204)
        } catch (error) {
            return res.status(500).send({ error })
        }
    }

}