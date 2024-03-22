import express from "express";
const router = express.Router();
import {
  createNote,
  getNotes,
  getNotetById,
  updateNote,
  deleteNote,
} from "../controllers/deliveryNotesController.js";

router.get("/notes", getNotes);
router.get("/note/:id", getNotetById);
router.post("/create-note", createNote);
router.put("/update-note/:id", updateNote);
router.delete("/delete-note/:id", deleteNote);

export default router;
