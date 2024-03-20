import express from "express";
import { deliveryNotes } from "../controllers/deliveryNotesController.js";

const routes = express.Router();

routes.get("/delivery-notes", deliveryNotes); // Llama a la función `deliveryNotes` directamente
routes.get("/delivery-notes/:id", deliveryNotes); // Llama a la función `deliveryNotes` directamente

export default routes;
