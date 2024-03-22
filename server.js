import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import loginRoutes from './routes/loginRoutes.js';
import clientRoute from './routes/clientRoutes.js';
import clientsViewRoute from './routes/clientRoutes.js';
import deleteClientRoute from './routes/clientRoutes.js';
import updateClientRoute from './routes/clientRoutes.js';
import invoicesViewRoute from './routes/invoicesViewRoute.js';


const app = express();
const PORT = process.env.PORT || 3000;

// Configurar el middleware CORS
app.use(cors());

app.use(express.json());
app.use("/", loginRoutes);

//Rutas Clientes
app.get("/clients-view", clientsViewRoute);
app.delete("/clients-view/:id", deleteClientRoute);
app.put("/update-client/:id", updateClientRoute); 
app.get("/update-client/:id", updateClientRoute); 
app.post("/api/clients", clientRoute);

//Ruta vista factura
app.get("/invoices-view", invoicesViewRoute);
// app.post('/invoices-view/:nro_factura/download', downloadInvoicePDF);

//app.post("/create-invoices", createInvoiceRoute); 
// app.get("/invoices/:id", getInvoiceRoute); 
// app.put("/invoices/:id", updateInvoiceRoute); 
// app.delete("/invoices/:id", deleteInvoiceRoute); 


try {
  await db.authenticate();
  console.log("Está conectado");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
