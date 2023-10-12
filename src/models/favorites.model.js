import Favorite from '../schemas/favorite.schema.js';

export class FavoritesModel {
  static getFavorites = async ({ userId }) => {
    const favorites = await Favorite.find({ userId });
    return favorites;
  };

  static addFavorites = async ({ movieId, title, poster, url, userId }) => {
    const exist = await Favorite.findOne({ movieId})
    if (exist) throw new Error('Favorite already exist');

    const newFavorite = new Favorite({ movieId, title, poster, url, userId });
    const savedFavorite = await newFavorite.save();
    return savedFavorite;
  };

  static removeFavorite = async ({ favId }) => {
    const removedFavorite = await Favorite.findByIdAndDelete(favId);
    return removedFavorite;
  };
}
