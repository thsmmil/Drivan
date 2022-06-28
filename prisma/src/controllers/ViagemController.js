import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async createTripDriver(req, res) {
        try {
            const {
                HoraSaida,
                Valor,
                DataIda,
                motoristaId,
                enderecoId
            } = req.body;
            const hora = new Date(HoraSaida);
            const ida = new Date(DataIda);
            const trip = await prisma.viagem.create({
                data: {
                    HoraSaida: hora,
                    Valor,
                    DataIda: ida,
                    motoristas: {
                        create: {
                            IsConcluido: false,
                            iniciadoEm: null,
                            concluidoEm: null,
                            motorista: { connect: { CPF: motoristaId } },
                        },
                    },
                    endereco: { connect: { Id: enderecoId } },

                }
            });
            return res.status(201).send(trip);
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findAllTrip(req, res) {
        try {
            const trips = await prisma.viagem.findMany(
                {
                    include: {
                        motoristas: {
                            select: {
                                motorista: {
                                    select:{
                                        Nome: true,
                                        Telefone: true
                                    }
                                },
                                IsConcluido: true,
                                reservadoEm: true,
                                iniciadoEm: true,
                                concluidoEm: true,
                                avaliacao: true
                            }
                        },
                        passageiros: {
                            select: {
                                passageiro: {
                                    select: {
                                        Nome:true,
                                        Telefone: true
                                    }
                                },
                                IsConcluido: true,
                                reservadoEm: true,
                                iniciadoEm: true,
                                concluidoEm: true,
                                avaliacao: true
                            }
                        },
                        endereco: {
                            select: {
                                Logradouro: true,
                                Numero: true,
                                PontoReferencia: true,
                                cidade: {
                                    select: {
                                        Nome: true,
                                        estado: { select: { Uf: true } }
                                    }
                                }
                            }
                        }
                    }
                }
            );
            trips ? res.json(trips) : res.status(404).send({ error: "Não existem viagens cadastrados no sistema" });
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findTrip(req, res) {
        try {
            const { Id } = req.params;
            const trip = await prisma.viagem.findUnique({
                where: {
                    Id: parseInt(Id)
                },
                include: {
                    motoristas: {
                        select: {
                            motorista: {
                                select:{
                                    Nome: true,
                                    Telefone: true
                                }
                            },
                            IsConcluido: true,
                            reservadoEm: true,
                            iniciadoEm: true,
                            concluidoEm: true,
                            avaliacao: true
                        }
                    },
                    passageiros: {
                        select: {
                            passageiro: {
                                select: {
                                    Nome:true,
                                    Telefone: true
                                }
                            },
                            IsConcluido: true,
                            reservadoEm: true,
                            iniciadoEm: true,
                            concluidoEm: true,
                            avaliacao: true
                        }
                    },
                    endereco: {
                        select: {
                            Logradouro: true,
                            Numero: true,
                            PontoReferencia: true,
                            cidade: {
                                select: {
                                    Nome: true,
                                    estado: { select: { Uf: true } }
                                }
                            }
                        }
                    },
                }
            });
            trip ? res.json(trip) : res.status(404).send({ error: "Viagem não encontrada" });
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }

    },
    async updateTrip(req, res) {
        const {
            Id,
            HoraSaida,
            Valor,
            DataIda,
            IsConcluido,
            iniciadoEm,
            concluidoEm,
            avaliacao,
            IsConcluidoPass,
            iniciadoEmPass,
            concluidoEmPass,
            avaliacaoPass,
            motoristaId,
            enderecoId,
            passageiroId
        } = req.body;

        try {
            let trip = await prisma.viagem.findUnique({ where: { Id } })
            if (!trip)
                return res.status(404).send({ error: "Viagem não encontrada" })
            trip = await prisma.viagem.update({
                where: { Id: parseInt(Id) },
                data: {
                    HoraSaida: new Date(HoraSaida),
                    Valor,
                    DataIda: new Date(DataIda),
                    motoristas: {
                        connectOrCreate: {
                            where: { motoristaId_viagemId: { motoristaId, viagemId: Id } },
                            create: {
                                IsConcluido,
                                iniciadoEm: new Date(iniciadoEm),
                                concluidoEm: new Date(concluidoEm),
                                avaliacao,
                                motorista: { connect: { CPF: motoristaId } }
                            }
                        }
                    },

                    passageiros: {
                        connectOrCreate: {
                            where: { passageiroId_viagemId: { passageiroId, viagemId: Id } },
                            create: {
                                IsConcluido: IsConcluidoPass,
                                iniciadoEm: new Date(iniciadoEmPass),
                                concluidoEm: new Date(concluidoEmPass),
                                avaliacao: avaliacaoPass,
                                passageiro: { connect: { CPF: passageiroId } }
                            }
                        }
                    }
                }
            })
            return res.json(trip)
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async deleteTrip(req, res) {
        try {
            const { Id } = req.params;
            const trip = await prisma.viagem.findUnique({
                where: {
                    Id: parseInt(Id)
                }
            });
            if (!trip) return res.status(404).send({ error: "Viagem não encontrado" })
            await prisma.viagem.delete({
                where: { Id }
            })
            return res.sendStatus(204)
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    }
}