import express from 'express';
import cors from 'cors';

import router from './routes/userRoutes.js';
import connection from './config/db.js';
import dotenv from 'dotenv';
dotenv.config(); // Make sure this is at the very top


const app = express();
app.use(express.json());
app.use(cors());

app.use("/api",router);

connection();

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

