import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

config();
app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

export { app };
