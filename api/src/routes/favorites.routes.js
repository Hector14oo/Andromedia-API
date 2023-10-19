import { Router } from 'express';
import { validateJWT } from '../middlewares/validateJWT.js';
import { FavoritesController } from '../controllers/favorites.controller.js';
import { schemaValidator } from '../middlewares/schemaValidator.js'
import { FavoriteValidator } from '../schemas/favorite.schema.js';

export const favoritesRouter = Router();

favoritesRouter.get('/', validateJWT, FavoritesController.getFavorites);

favoritesRouter.post('/', validateJWT, schemaValidator(FavoriteValidator), FavoritesController.addFavorite);

favoritesRouter.delete('/:id', validateJWT, FavoritesController.removeFavorite);
