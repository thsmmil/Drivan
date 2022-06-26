//import { estados } from './Estado';
//import { cidades } from './Cidade';
//import { PrismaClient } from '@prisma/client';
const PrismaCliente = require('@prisma/client')
const prisma = new PrismaCliente.PrismaClient()//PrismaClient()
const city = require('./Cidade')
const state = require('./Estado')
const estad = new state()
const cidad = new city()
const estados = estad.getEstado()
const cidades = cidad.getCidade()
async function main() {
  for (let estado of estados) {
    await prisma.estado.create({
      data: estado
    })
  }
  // for (let cidade of cidades) {
  //   await prisma.cidade.create({
  //     data: {
  //       Nome: cidade.Nome,
  //       estado: {connect: {Id: cidade.estadoId}},
  //     }
  //   })
  // }
}

main().catch((e) =>{
  console.log(e);
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect();
})
