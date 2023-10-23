import { Router } from "express";

const router = Router();

router.get("/signup", (req, res) => {
  res.send("Signed up successfully");
});

export default router;
