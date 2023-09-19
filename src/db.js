import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect(globalThis.process.env.CONNECTION_STRING);
    console.log('>>> DB CONNECTED')
  } catch (error) {
    console.error(error);
  }
}
