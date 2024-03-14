// routes.js
import express from 'express';
import { LoginUsers } from '../controllers/loginControllers.js';
import authenticateToken from '../middleware/authMiddleware.js'

const router = express.Router();

router.post("/", LoginUsers);
router.get("/ruta-protegida", authenticateToken, (req, res) => {
    res.json({ message: 'Ruta protegida' });
});

export default router;

