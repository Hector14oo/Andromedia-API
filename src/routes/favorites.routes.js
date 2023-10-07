import { Router } from 'express';
import { validateJWT } from '../middlewares/validateJWT.js';
import { FavoritesController } from '../controllers/favorites.controller.js';

export const favoritesRouter = Router();

favoritesRouter.get('/', validateJWT, FavoritesController.getFavorites);

favoritesRouter.post('/', validateJWT, FavoritesController.addFavorite);

favoritesRouter.delete('/:id', validateJWT, FavoritesController.removeFavorite);
