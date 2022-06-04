import { Router } from 'express';


import AuthController from './controllers/AuthController';

const router = Router();

router.post('/login', AuthController.loginPassenger);
router.delete('/logout', AuthController.logout);
router.post('/token', AuthController.token);


export { router }