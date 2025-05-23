import express from 'express';
const router = express.Router();
import { CreateUser, GetAllUsers } from "../controllers/userController.js";

router.post("/add", CreateUser)
router.get("/getAll", GetAllUsers)

export default router;
