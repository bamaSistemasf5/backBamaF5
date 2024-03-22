import express from "express";
const router = express.Router();
import {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

router.get("/clients", getClients);
router.get("/client/:id", getClientById);
router.post("/create-client", createClient);
router.put("/update-client/:id", updateClient);
router.delete("/delete-client/:id", deleteClient);

export default router;