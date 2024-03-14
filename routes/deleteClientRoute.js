import express from 'express';
import { deleteClient } from "../controllers/clientController.js";

const routes = express.Router();

routes.delete('/clients-view/:id', deleteClient); // Llama a la función `deleteClient` directamente

export default routes;