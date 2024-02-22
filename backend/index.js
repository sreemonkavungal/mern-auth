import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from  './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();

// MongoDB Connection
mongoose.connect(process.env.MONGO).then(() => { 
    console.log('Connected To MongoDB');
}).catch(() => {
    console.log(err);
})


const app = express();

// To add JSON as Input to backend
app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server Listening On Port 3000');
})

// Create API Route
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Middleware
app.use((err, req, res, next) =>  {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
})