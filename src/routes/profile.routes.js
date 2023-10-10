import { Router } from "express";
import { validateJWT } from '../middlewares/validateJWT.js';
import { ProfileController } from '../controllers/profile.controller.js';

export const profileRouter = Router();

profileRouter.get('/', validateJWT, ProfileController.getProfile);

profileRouter.put('/update', validateJWT, ProfileController.updateProfile);

profileRouter.delete('/delete', validateJWT, ProfileController.deleteProfile);