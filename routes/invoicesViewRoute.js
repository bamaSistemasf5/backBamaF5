import express from "express";
import { invoicesView, createInvoice } from "../controllers/invoiceController.js";

const routes = express.Router();

routes.get('/invoices-view', invoicesView); 
routes.get('/invoices-view/:id', invoicesView); 
routes.post("/create-invoice", createInvoice);

export default routes;
