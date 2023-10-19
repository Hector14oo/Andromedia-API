import { FavoritesModel } from "../models/favorites.model.js";

const filterFavorite = (favorite) => {
  return {
    id: favorite._id,
    movieId: favorite.movieId,
    title: favorite.title,
    overview: favorite.overview,
    poster: favorite.poster,
    url: favorite.url,
    userId: favorite.userId,
  };
}

export class FavoritesController {
  static getFavorites = async (req, res) => {
    try {
      const { id } = req.user;
      const data = await FavoritesModel.getFavorites({ userId: id });
      
      res.status(200).json(data.map(favorite => filterFavorite(favorite)));
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  };

  static addFavorite = async (req, res) => {
    try {
      const { movieId, title, overview, poster, url } = req.body;
      const { id } = req.user;
      const data = await FavoritesModel.addFavorites({ movieId, title, overview, poster, url, userId: id });

      res.status(201).json(filterFavorite(data));
    } catch (error) {
      if(error.message === 'Favorite already exists') return res.status(409).json({ succces: false, message: error.message });
      res.status(500).json({ success: false, message: error.message })
    }
  };
  
  static removeFavorite = async (req, res) => {
    try {
      const { id } = req.params;
      if(!id) return res.status(400).json({ success: false, message: 'Please enter a Favorite id' })

      const data = await FavoritesModel.removeFavorite({ favId: id });
      
      if(!data) throw new Error('File not found');

      res.sendStatus(204);
    } catch (error) {
      if(error.message === 'File not found') return res.status(404).json({ message: error.message });
      if(error.name === 'CastError') return res.status(400).json({ success: false, message: 'Invalid id' });
      res.status(500).json({ success: false, message: error.message })
    }
  };
}
