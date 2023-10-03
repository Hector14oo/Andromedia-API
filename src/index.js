import { app } from './app.js';
import { mediaRouter } from './routes/media.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { connectDB } from './db.js';

connectDB();
app.use('/api/media', mediaRouter);
app.use('/api/auth', authRouter);

const PORT = globalThis.process.env.PORT;

app.listen(PORT, console.log(`The server is listening on port: ${PORT}`));
