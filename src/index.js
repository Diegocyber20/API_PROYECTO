import express from 'express';
import { PORT } from './config.js';
import userRoutes from './routes/users.routes.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// CORS para permitir peticiones desde React
app.use(cors({
  origin: "http://localhost:5173"
}));

// Rutas
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log('Server on port', PORT);
});
