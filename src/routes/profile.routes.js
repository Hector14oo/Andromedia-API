import { Router } from "express";
import { validateJWT } from '../middlewares/validateJWT.js';
import { schemaValidator } from '../middlewares/schemaValidator.js';
import { updateValidator } from "../schemas/user.schema.js";
import { ProfileController } from '../controllers/profile.controller.js';

export const profileRouter = Router();

profileRouter.get('/', validateJWT, ProfileController.getProfile);

profileRouter.put('/update', validateJWT, schemaValidator(updateValidator), ProfileController.updateProfile);

profileRouter.delete('/delete', validateJWT, ProfileController.deleteProfile);