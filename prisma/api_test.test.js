const express = require("express");
const request = require("supertest");
const router = require("./src/routes");

const app = express();

app.use(express.json());
app.use(router);

describe("Testando cadastro de passageiros", () => {
  test("Deve chegar na rota principal", async () => {
    const res = await request(app).post("/passageiro").send({
      CPF: "1313131313",
      Nome: "Thiago Hortencio",
      Email: "vamo@gmail.com",
      Telefone: "87996645630",
      Senha: "123456",
    });

    expect(res.body).toHaveProperty("CriadoEm");
  });
});

describe("Testando cadastro de motorista", () => {
  test("Deve cadastrar um motorista", async () => {
    const res = await request(app).post("/motorista").send({
      Id: "13131313131",
      Nome: "Thiago Hortencio",
      Email: "vamos@gmail.com",
      Telefone: "87996645630",
      Senha: "123456",
    });

    expect(res.body).toHaveProperty("CriadoEm");
  });
});

describe("Testando cadastro de carro", () => {
  test("Deve cadastrar um carro", async () => {
    const aux = await request(app).post("/motorista").send({
      Id: "13131313131",
      Nome: "Thiago Hortencio",
      Email: "vamos@gmail.com",
      Telefone: "87996645630",
      Senha: "123456",
    });

    const res = await request(app).post("/carro").send({
      Modelo: "Gol",
      Marca: "Volkswagem",
      Placa: "1312-ADS",
      Ano: 2020,
      Assentos: 5,
      Cor: "Prata",
      CPF: "1313131311",
    });

    expect(res.body).toHaveProperty("Id");
  });
});
