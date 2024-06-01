import express from 'express'
import dotenv from 'dotenv'
import connectDb from './db/connectToMongoDb.js';
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth.route.js"

const app = express();
app.use(express.json());
app.use(cookieParser());

dotenv.config();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send(`Calm Circle is running`);
})

app.listen(process.env.PORT || 3000, () => {
    connectDb()
    console.log(`Server is running at port: ${process.env.PORT}`);
})
