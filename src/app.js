import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

config();
app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));

export { app };
