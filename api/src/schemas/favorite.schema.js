import { Schema, model } from 'mongoose';
import { z } from 'zod';

export const FavoriteSchema = new Schema({
  movieId: { type: Number, required: true },
  title: { type: String, required: true },
  overview: { type: String },
  poster: { type: Object },
  url: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default model('Favorite', FavoriteSchema);

export const FavoriteValidator = z.object({
  movieId: z.number(),
  title: z.string(),
  overview: z.string(),
  poster: z.object({
    light: z.string().url(),
    original: z.string().url(),
  }).nullable(),
  url: z.string().url(),
});
