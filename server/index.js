import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/imageRouter.js';
import DBConnection from './database/db.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 8000;
DBConnection();

app.listen(PORT, ()=>{
    console.log(`App is running or port- ${PORT}`)
});