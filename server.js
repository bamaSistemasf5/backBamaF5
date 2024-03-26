import express from "express";
import cors from "cors";
import db from "./database/db.js";

import clientRoutes from "./routes/clientRoutes.js";
import deliveryNotesRoutes from "./routes/deliveryNotesRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import ordersRoutes from "./routes/ordersRoutes.js";
import invoicesViewRoute from "./routes/invoicesViewRoute.js";

const app = express();

// Configurar el middleware CORS
app.use(cors());

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
  const port = process.env.NODE_ENV === 'test' ? 8001 : 8000;
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  return server;
}

export default app;