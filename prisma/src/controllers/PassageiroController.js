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
            return res.json({ error: error.message })
        }
    },
    async findAllPassenger(req, res) {
        try {
            const users = await prisma.passageiro.findMany();
            return res.json(users);
        } catch (error) {
            return res.json({ error: error.message })
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
        const { Nome, Email, Telefone, Senha } = req.body;

        try {
            let user = await prisma.passageiro.findUnique({ where: { CPF: id } })
            if (!user)
                return res.json({ error: "Passageiro não encontrado" });
            if (await bcrypt.compare(Senha, user.Senha)) {
                user = await prisma.passageiro.update({
                    where: { CPF: id },
                    data: {
                        Nome,
                        Email,
                        Telefone,
                        Senha: user.Senha
                    }
                })
            }else{
                let hashedPassword = await bcrypt.hash(Senha, 10)
                user = await prisma.passageiro.update({
                    where: { CPF: id },
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
            return res.json({ error: error.message })
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