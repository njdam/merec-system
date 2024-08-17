// To Initialize the Express app and include the routes.
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import patientRoutes from './routes/patient.js';
import appointmentRoutes from './routes/appointment.js';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/users', userRoutes);
app.use('/', authRoutes);
app.use('/patients', patientRoutes);
app.use('/appointments', appointmentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

export default app;
