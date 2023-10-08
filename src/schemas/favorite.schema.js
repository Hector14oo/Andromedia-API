import { Schema, model } from 'mongoose';

export const FavoriteSchema = new Schema({
  movieId: { type: Number, required: true },
  title: { type: String, required: true },
  poster: { type: Object, required: true },
  url: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default model('Favorite', FavoriteSchema);
