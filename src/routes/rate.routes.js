import { Router } from 'express';
import { validateJWT } from '../middlewares/validateJWT.js';
import { RateController } from '../controllers/rate.controller.js';
import { checkUserApiKey } from '../middlewares/checkUserApiKey.js';

export const rateRouter = Router();

rateRouter.get('/list', validateJWT, checkUserApiKey, RateController.getRateList);

rateRouter.post('/movie/:id', validateJWT, checkUserApiKey, RateController.rateMovie);

rateRouter.post('/tv/:id', validateJWT, checkUserApiKey, RateController.rateTvShow);
