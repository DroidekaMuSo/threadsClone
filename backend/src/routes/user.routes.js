import { Router } from "express";
import { signupUser } from "../controller/user.controller.js";

const router = Router();

router.post("/signup", signupUser);

export default router;
