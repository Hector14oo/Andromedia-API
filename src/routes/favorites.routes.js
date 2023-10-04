import { Router } from 'express';
import { validateJWT } from '../middlewares/validateJWT.js';
import { FavoritesController } from '../controllers/favorites.controller.js';

export const favoritesRouter = Router();

favoritesRouter.get('/favorites', validateJWT, FavoritesController.getFavorites);
favoritesRouter.post('/favorites/:id', validateJWT, FavoritesController.addFavorite);
favoritesRouter.delete('/favorites/:id', validateJWT, FavoritesController.removeFavorite);
