import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import connectDB from './db/db.js';
import dotenv from 'dotenv';
import router from './route/userRoute.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

connectDB(). then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
})})
.catch((err) => {
    console.log("ERROR: ", err);
})

app.use("/api/user", router);