import express from 'express';
const router = express.Router();
import { CreateUser, DeleteUser, GetAllUsers, GetUserById, UpdateUser } from "../controllers/userController.js";

router.post("/add", CreateUser)
router.get("/getAll", GetAllUsers)
router.get("/get/:id", GetUserById)
router.put("/update/:id", UpdateUser)
router.delete("/delete/:id", DeleteUser)

export default router;
