import { Schema, model } from 'mongoose';

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
