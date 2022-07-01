import { Router } from 'express';

import PassageiroController from './controllers/PassageiroController';
import MotoristaController from './controllers/MotoristaController';
import CarroController from './controllers/CarroController';
import LoginController from './controllers/LoginController';
import CidadeController from './controllers/CidadeController';
import EnderecoController from './controllers/EnderecoController';
import ViagemController from './controllers/ViagemController';

// LoginController.authenticateToken,
const router = Router();
router.post("/passageiro", PassageiroController.createPassenger);
router.get("/passageiros", PassageiroController.findAllPassenger);
router.get("/passageiro/:id", PassageiroController.findPassenger);
router.put("/passageiro", PassageiroController.updatePassenger);
router.delete("/passageiro/:id", PassageiroController.deletePassenger);

router.post("/motorista", MotoristaController.createDriver);
router.get("/motoristas", MotoristaController.findAllDriver);
router.get("/motorista/:id", MotoristaController.findDriver);
router.put("/motorista", MotoristaController.updateDriver);
router.delete("/motorista/:id", MotoristaController.deleteDriver);

router.post("/carro", CarroController.createCar);
router.get("/carros/:Id", CarroController.findAllCarById);
router.get("/carros", CarroController.findAllCar);
router.get("/carro/:Id", CarroController.findCar);
router.put("/carro", CarroController.updateCar);
router.delete("/carro/:Id", CarroController.deleteCar);

router.get("/cidades", CidadeController.findAllCities);
router.get("/estados", CidadeController.findAllStates);


router.post("/endereco", EnderecoController.createAddress);
router.get("/enderecos", EnderecoController.findAllAddress);
router.get("/enderecos/:Id", EnderecoController.findAllAddresses);
router.get("/endereco/:Id", EnderecoController.findAddress);
router.put("/endereco", EnderecoController.updateAddress);
router.delete("/endereco/:Id", EnderecoController.deleteAddress);

router.post("/viagem", ViagemController.createTripDriver);
router.get("/viagens", ViagemController.findAllTrip);
router.get("/viagem/:Id", ViagemController.findTrip);
router.put("/viagem", ViagemController.updateTrip);
router.delete("/viagem/:Id", ViagemController.deleteTrip);


export { router }