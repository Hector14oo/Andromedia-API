import Favorite from '../schemas/favorite.schema.js';

export class FavoritesController {
  static getFavorites = async (req, res) => {
    const favorites = await Favorite.find({ userId: req.params.user.id });
    return res.json(favorites);
  };

  static addFavorites = async (req, res) => {
    const newFavorite = new Favorite({
      ...req.params.movie,
      userId: req.params.user.id,
    })

    const savedFavorite = await newFavorite.save();

    res.json(savedFavorite);
  };

  static removeFavorites = async (req, res) => {
    const removedFavorite = await Favorite.findByIdAndRemove({ userId: req.params.user.id, id: req.params.movieId });
    if(!removedFavorite) return res.status(404).json({ message: 'Favorite not found' });
    return res.status(204);
  };
}
