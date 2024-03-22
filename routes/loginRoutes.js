import express from "express";
const router = express.Router();

import { LoginUsers } from "../controllers/loginController.js";

import authenticateToken from "../middleware/authMiddleware.js";

router.post("/", LoginUsers);

router.get("/ruta-protegida", authenticateToken, (req, res) => {
  res.json({ message: "Ruta protegida" });
});

export default router;
