import { Router } from 'express';
import { validateJWT } from '../middlewares/validateJWT.js';
import { RateController } from '../controllers/rate.controller.js';
import { checkUserApiKey } from '../middlewares/checkUserApiKey.js';

export const rateRouter = Router();

rateRouter.get('/list', validateJWT, checkUserApiKey, RateController.getRateList);

rateRouter.post('/:mediaType/:id', validateJWT, checkUserApiKey, RateController.addRate);

rateRouter.delete('/:mediaType/:id', validateJWT, checkUserApiKey, RateController.removeRate);