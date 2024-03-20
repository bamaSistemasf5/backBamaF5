import express from 'express';
import { updateClient } from "../controllers/clientController.js";

const routes = express.Router();

routes.put('/update-client/:id', updateClient); // Llama a la función `updateClient` directamente
// routes.get('/update-client/:id', updateClient);
export default routes;