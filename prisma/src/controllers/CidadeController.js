import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    async findAllCities(req, res) {
        try {
            const cities = await prisma.cidade.findMany({
                include: {
                    estado:{
                        select: {
                            Nome: true,
                            Uf: true
                        }
                    }
                }
            });
            cities ? res.json(cities) : res.status(404).send({ error: "Não existem cidades cadastrados no sistema" }); 
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    },
    async findAllStates(req, res){
        try {
            const cities = await prisma.estado.findMany({});
            cities ? res.json(cities) : res.status(404).send({ error: "Não existem cidades cadastrados no sistema" }); 
        } catch (error) {
            return res.status(500).send({ error: error.message })
        }
    }
}