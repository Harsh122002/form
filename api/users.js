import express from 'express';
import cors from 'cors';
import { connection } from 'mongoose';
import userRoutes from "../routes/userRoutes.js";
import Serverless from 'serverless';


const app = express();
app.use(express.json());
app.use(cors());

app.use("api/",userRoutes);

await connection();

export const handler = Serverless(app);
