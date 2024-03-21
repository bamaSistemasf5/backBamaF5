import express from "express";
import { createInvoice } from "../controllers/invoiceController.js";


const routes = express.Router();

routes.post('/create-invoice', createInvoice);

// Agregar otras rutas para obtener, actualizar y eliminar clientes

export default routes;
