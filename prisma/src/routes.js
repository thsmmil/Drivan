import { Router } from 'express';

import PassageiroController from './controllers/PassageiroController';
import MotoristaController from './controllers/MotoristaController';
import CarroController from './controllers/CarroController';
import LoginController from './controllers/LoginController';

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


export { router }