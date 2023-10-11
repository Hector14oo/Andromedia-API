import { Schema, model } from 'mongoose';
import { z } from 'zod';

export const userSchema = new Schema(
  {
    username: { type: String, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    APIkey: { type: String },
    fullname: { type: String },
    gender: { type: String },
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model('User', userSchema);

export const authValidator = z.object({
  email: z.string({ required_error: 'Email is required' }).email(),
  password: z.string({ required_error: 'The password is required' }).min(6).max(20),
})