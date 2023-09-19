import { app } from './app.js';
import { mediaRouter } from './routes/media.js';
import { connectDB } from './db.js';

connectDB();
app.use('/media', mediaRouter);

const PORT = globalThis.process.env.PORT;

app.listen(PORT, console.log(`The server is listening on port: ${PORT}`));
