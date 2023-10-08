import { Schema, model } from 'mongoose';

export const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    APIkey: { type: String },
    fullName: { type: String },
    gender: { type: String },
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

export default model('User', userSchema);
