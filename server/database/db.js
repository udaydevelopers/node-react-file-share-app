import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const dbHost = process.env.DB_HOSTS;
    const dbOption = process.env.DB_OPTIONS;
    const dbName = process.env.DB_NAME;
    const dbPrefix = process.env.DB_PREFIX;
    const dbUserName = process.env.DB_USERNAME;
    const dbPassword = process.env.DB_PASSWORD;
    const MONGO_URI = `${dbPrefix}://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?${dbOption}`;
    
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;