import { Router } from 'express';
import { validateJWT } from '../middlewares/validateJWT.js';
import { RateController } from '../controllers/rate.controller.js';

export const rateRouter = Router();

rateRouter.get('/:guestId/list', validateJWT, RateController.getRateList);

rateRouter.post('/:guestId/movie/:id', validateJWT, RateController.rateMovie);

rateRouter.post('/:guestId/tv/:id', validateJWT, RateController.rateTvShow);
