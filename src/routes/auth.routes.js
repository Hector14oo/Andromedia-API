import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';

export const authRouter = Router();

authRouter.post('/register', AuthController.Register);

authRouter.post('/login', AuthController.Login);

authRouter.post('/logout', AuthController.Logout);