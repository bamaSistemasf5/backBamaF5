import express from 'express';
import cors from 'cors';
import db from './db.js';
import loginRoutes from './routes/loginRoutes.js';
import clientRoute from './routes/clientRoute.js';
import clientsViewRoute from './routes/clientsViewRoute.js';
import deleteClientRoute from './routes/deleteClientRoute.js';
import updateClientRoute from './routes/updateClientRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar el middleware CORS
app.use(cors());

//Rutas Clientes
app.use(express.json());
app.use("/", loginRoutes);
app.use("/client", clientRoutes);
app.use("/delivery-note", deliveryNotesRoutes);
app.use("/order", ordersRoutes);

//Ruta vista factura
app.get("/invoices-view", invoicesViewRoute);
// app.post('/invoices-view/:nro_factura/download', downloadInvoicePDF);

//app.post("/create-invoices", createInvoiceRoute);
// app.get("/invoices/:id", getInvoiceRoute);
// app.put("/invoices/:id", updateInvoiceRoute);
// app.delete("/invoices/:id", deleteInvoiceRoute);

export function startServer() {
  const port = process.env.NODE_ENV === "test" ? 8001 : 8000;
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  return server;
}

if (process.env.NODE_ENV !== "test") {
  startServer();
}

export default app;
