import { Schema, model } from 'mongoose';

export const FavoriteSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  adult: { type: Boolean, required: true },
  genres: { type: Array, required: true },
  tagline: { type: String, required: true },
  overview: { type: String, required: true },
  posters: { type: Object, required: true },
  backdrops: { type: Object, required: true },
  year: { type: String, required: true },
  votes: { type: Number, required: true },
  type: { type: String, required: true },
  url: { type: String, required: true },
});

export default model('Favorite', FavoriteSchema)