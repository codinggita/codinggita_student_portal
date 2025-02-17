import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mongoose from 'mongoose';
import EventRouter from './Routes/EventRoute.js'
import ActivityRouter from './Routes/ActivityRoute.js'
import PortfolioRoute from './Routes/PortfolioRoute.js'
import AuthRoute from './Routes/AuthRoute.js'

// Configure dotenv
dotenv.config();


const app = express();
const PORT = process.env.Express_PORT;
app.use(cors());
app.use(express.json())

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "CG_Student_Portal"  //  database name here
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

connectDB();

// Authenntication Router
app.use('/auth', PortfolioRoute)

// Events Router
app.use('/students/events', EventRouter)

// Student Activity Router
app.use('/students/activity', ActivityRouter)

// Portfolio Router
app.use('/portfolio', PortfolioRoute)




app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`)
})