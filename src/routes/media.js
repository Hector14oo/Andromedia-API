import { Router } from 'express';
import { MediaController } from '../controllers/media.js';

export const mediaRouter = Router();

mediaRouter.get('/', MediaController.getSearch);

mediaRouter.get('/trending', MediaController.getTrending);

mediaRouter.get('/:mediaType/:id', MediaController.getMediaDetails);
