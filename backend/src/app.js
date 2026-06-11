import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errorMiddleware, notFoundHandler } from './middlewares/error.middleware.js';
import campaignRouter from './routes/campaign.routes.js';

// Create Express app
const app = express();

// Use Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
}));
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use(express.json({ limit: '16kb' })); // JSON Body parser
app.use(express.urlencoded({ extended: true, limit: '16kb' })); // URL-encoded parser
app.use(cookieParser()); // Cookie parser

// Health check route
app.get('/api/v1/healthcheck', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Event Pulse Server is running' });
});

// Register routes
app.use('/api/campaigns', campaignRouter);

// Undefined routes handler (404)
app.use(notFoundHandler);

// Global Error Middleware
app.use(errorMiddleware);

export { app };



