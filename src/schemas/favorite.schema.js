import { Schema, model } from 'mongoose';

export const FavoriteSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  posters: { type: Object, required: true },
  url: { type: String, required: true },
});

export default model('Favorite', FavoriteSchema)