import { FavoritesModel } from "../models/favorites.model.js";

export class FavoritesController {
  static getFavorites = async (req, res) => {
    try {
      const { id } = req.user;
      const data = await FavoritesModel.getFavorites({ userId: id });
      
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  };

  static addFavorite = async (req, res) => {
    try {
      const { movieId, title, poster, url } = req.body;
      const { id } = req.user;
      const data = await FavoritesModel.addFavorites({ movieId, title, poster, url, userId: id });

      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  };
  
  static removeFavorite = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await FavoritesModel.removeFavorite({ favId: id });
      
      if(!data) throw new Error('File not found');

      res.status(204).json({ message: 'Favorite deleted successfully'});
    } catch (error) {
      if(error.message === 'File not found') return res.status(404).json({ message: error.message });
      res.status(500).json({ message: error.message })
    }
  };
}
