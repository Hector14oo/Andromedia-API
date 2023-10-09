import { Router } from "express";
import { validateJWT } from '../middlewares/validateJWT.js';

export const profileRouter = Router();

profileRouter.get('/', validateJWT, ProfileController.getProfile);

profileRouter.patch('/update', validateJWT, ProfileController.updateProfile);

profileRouter.delete('/delete', validateJWT, ProfileController.deleteProfile);