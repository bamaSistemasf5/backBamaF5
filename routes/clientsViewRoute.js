import express from "express";
import { clientsView } from "../controllers/clientController.js";

const routes = express.Router();

routes.get('/clients-view', clientsView); // Llama a la función `clientsView` directamente
routes.get('/clients-view/:id', clientsView); // Llama a la función `clientsView` directamente

export default routes;
