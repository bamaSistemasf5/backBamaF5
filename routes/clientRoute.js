import express from "express";
import { createClient } from "../controllers/clientController.js";

const routes = express.Router();

routes.post('/api/clients', createClient);
// Agregar otras rutas para obtener, actualizar y eliminar clientes

export default routes;
