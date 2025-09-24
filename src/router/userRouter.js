import { createUser, getAllUsers } from "../controllers/userController.js";
import express from "express";
import { authorize } from "../middlewares/authorize.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = express.Router();
router.post("/", verifyToken, authorize('admin'), createUser);
router.get("/", verifyToken, authorize('admin'), getAllUsers);

export default router;
