import { Router } from 'express';
import { MediaController } from '../controllers/media.controller.js';

export const mediaRouter = Router();

mediaRouter.get('/', MediaController.Search);

mediaRouter.get('/trending', MediaController.Trending);

mediaRouter.get('/:mediaType/:id', MediaController.MediaDetails);

mediaRouter.get('/tv/:id/season/:seasonId', MediaController.SeasonDetails);
