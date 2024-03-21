import express from "express";
import { invoicesView } from "../controllers/invoiceController.js";

const routes = express.Router();

routes.get('/invoices-view', invoicesView); 
routes.get('/invoices-view/:id', invoicesView); 

export default routes;
