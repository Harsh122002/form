import express from 'express';
import { CreateUser } from '../controllers/userController';
const router = express.Router();

router.post("/add",CreateUser)