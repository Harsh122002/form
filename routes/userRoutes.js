import express from 'express';
const router = express.Router();
import { CreateUser } from "../controllers/userController.js";

router.post("/add", CreateUser)

export default router;
