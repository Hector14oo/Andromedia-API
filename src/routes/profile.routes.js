import { Router } from "express";

const profileRouter = Router();

profileRouter.get('/profile', validateJWT, AuthController.Profile);