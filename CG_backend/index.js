import express from 'express';
import dotenv from 'dotenv';
import EventRouter from './Routes/EventRoute.js'
import ActivityRouter from './Routes/ActivityRoute.js'

// Configure dotenv
dotenv.config();


const app = express();
const PORT = process.env.Express_PORT;

app.use(express.json())


// Events Router
app.use('/students/events',EventRouter)

// Student Activity Router
app.use('/students/activity',ActivityRouter)
    

app.listen(PORT, () => {
    console.log(`Listning on port ${PORT}`)
})