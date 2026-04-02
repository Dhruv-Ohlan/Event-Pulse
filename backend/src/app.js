import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use(express.json({ limit: '16kb' })); // Body parser
app.use(express.urlencoded({ extended: true, limit: '16kb' })); // URL-encoded parser
app.use(cookieParser()); // Cookie parser

// Health check route
app.get('/api/v1/healthcheck', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Event Pulse Server is running' });
});

// Example route import and usage (to be implemented later)
// import exampleRouter from './routes/example.routes.js';
// app.use('/api/v1/examples', exampleRouter);

export { app };
