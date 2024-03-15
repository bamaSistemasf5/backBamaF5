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
app.get("/clients-view", clientsViewRoute);
app.delete("/clients-view/:id", deleteClientRoute);
app.put("/update-client/:id", updateClientRoute); 
app.get("/update-client/:id", updateClientRoute); 
app.post("/create-client", clientRoute);
//Rutas Albaranes
// app.get("/delivery-notes", deliveryNotesRoute);
try {
  await db.authenticate();
  console.log("Está conectado");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
