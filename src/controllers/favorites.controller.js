import { FavoritesModel } from "../models/favorites.model.js";

export class FavoritesController {
  static getFavorites = async (req, res) => {
    try {
      const { id } = req.user;
      const data = await FavoritesModel.getFavorites({ userId: id });
      res.json(200, data);
    } catch (error) {
      res.json(400, error.message)
    }
  };

  static addFavorite = async (req, res) => {
    const { movieId, title, poster, url } = req.body;
    const { id } = req.user;
    
    try {
      const data = await FavoritesModel.addFavorites({ movieId, title, poster, url, userId: id });
      res.json(201, data);
    } catch (error) {
      res.json(400, error.message)
    }
  };
  
  static removeFavorite = async (req, res) => {
    const { id } = req.params;
    
    try {
      const data = await FavoritesModel.removeFavorite({ favId: id });
      if(!data) throw new Error({ message: 'File not found' })
      res.json(204, { message: 'Favorite deleted successfully' });
    } catch (error) {
      if(error.message === 'File not found') return res.json(404, error.message)
      res.json(400, error.message)
    }
  };
}
