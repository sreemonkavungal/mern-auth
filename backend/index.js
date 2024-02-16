import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// MongoDB Connection
mongoose.connect(process.env.MONGO).then(() => { 
    console.log('Connected To MongoDB');
}).catch(() => {
    console.log(err);
})


const app = express();

app.listen(3000, () => {
    console.log('Server Listening On Port 3000');
})