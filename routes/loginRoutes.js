// routes.js
import express from 'express';
import getUsers, { LoginUsers } from '../controllers/loginController.js';
// import authenticateToken from '../middleware/authMiddleware.js'

const router = express.Router();

router.post("/", LoginUsers);
// router.get("/ruta-protegida", authenticateToken, (req, res) => {
//     res.json({ message: 'Ruta protegida' });
// });
router.get("/users/:id", getUsers);


export default router;

