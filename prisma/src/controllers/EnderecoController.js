import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async createAddress(req, res) {
        try {
            const { Logradouro, PontoReferencia, cidadeId, Numero } = req.body;

            const end = await prisma.endereco.create({
                data: {
                    Logradouro,
                    PontoReferencia,
                    Numero,
                    cidade: { connect: { Id: cidadeId } },
                }
            });
            return res.status(201).send(end);
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findAllAddress(req, res) {
        try {
            const ends = await prisma.endereco.findMany(
                {
                    include: {
                        cidade: {
                            select: {
                                Nome: true,
                                estado: {
                                    select: {
                                        Nome: true,
                                        Uf: true
                                    }
                                }
                            }
                        }
                    }
                }
            );
            ends ? res.json(ends) : res.status(404).send({ error: "Não existem endereços cadastrados no sistema" });
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findAllAddresses(req, res) {
        try {
            const { Id } = req.params;
            const ends = await prisma.endereco.findMany(
                {
                    where: {
                        viagem:{none:{enderecoId: undefined}}

                    },
                    include: {
                        cidade: {
                            select: {
                                Nome: true,
                                estado: {
                                    select: {
                                        Nome: true,
                                        Uf: true
                                    }
                                }
                            }
                        }
                    }
                }
            );
            ends ? res.json(ends) : res.status(404).send({ error: "Não existem endereços cadastrados no sistema" });
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    }
    ,
    async findAddress(req, res) {
        try {
            const { Id } = req.params;
            const end = await prisma.endereco.findUnique({
                where: {
                    Id: parseInt(Id)
                },
                include: {
                    cidade: {
                        select: {
                            Nome: true,
                            estado: {
                                select: {
                                    Nome: true,
                                    Uf: true,
                                    Id: true
                                }
                            }
                        }
                    }
                }
            });
            end ? res.json(end) : res.status(404).send({ error: "Endereço não encontrado" });
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }

    },
    async updateAddress(req, res) {
        const { Id, Logradouro, PontoReferencia, cidadeId, Numero } = req.body;

        try {
            let end = await prisma.endereco.findUnique({ where: { Id } })
            if (!end)
                return res.status(404).send({ error: "Endereço não encontrado" })
            end = await prisma.endereco.update({
                where: { Id },
                data: {
                    Logradouro,
                    PontoReferencia,
                    Numero,
                    cidade: { connect: { Id: cidadeId } },
                }
            })
            return res.json(end)
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async deleteAddress(req, res) {
        try {
            const { Id } = req.params;
            const end = await prisma.endereco.findUnique({
                where: {
                    Id: parseInt(Id)
                }
            });
            if (!end) return res.status(404).send({ error: "Endereço não encontrado" })
            await prisma.endereco.delete({
                where: { Id: parseInt(Id) }
            })
            return res.sendStatus(204)
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    }
}