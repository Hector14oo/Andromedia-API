import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { authValidator } from '../schemas/auth.schema.js'
import { schemaValidator } from '../middlewares/schemaValidator.js';

export const authRouter = Router();

authRouter.post('/register', schemaValidator(authValidator), AuthController.Register);

authRouter.post('/login', schemaValidator(authValidator), AuthController.Login);

authRouter.post('/logout', AuthController.Logout);