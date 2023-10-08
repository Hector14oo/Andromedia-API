import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { validateJWT } from '../middlewares/validateJWT.js';

export const authRouter = Router();

authRouter.post('/register', AuthController.Register);

authRouter.post('/login', AuthController.Login);

authRouter.post('/logout', AuthController.Logout);

authRouter.delete('/profile/:id', validateJWT, AuthController.DeleteAccount);
