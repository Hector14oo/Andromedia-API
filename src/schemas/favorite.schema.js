import { Schema, model } from 'mongoose';
import { z } from 'zod';

export const FavoriteSchema = new Schema({
  movieId: { type: Number, required: true },
  title: { type: String, required: true },
  poster: { type: Object, required: true },
  url: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default model('Favorite', FavoriteSchema);

export const FavoriteValidator = z.object({
  movieId: z.number(),
  title: z.string(),
  poster: z.object({
    light: z.string().url(),
    original: z.string().url(),
  }),
  url: z.string().url(),
});
