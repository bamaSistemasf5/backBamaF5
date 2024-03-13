import express from 'express';
import cors from 'cors';
import  db from './db.js';
import loginRoutes from './routes/loginRoutes.js'
import clientRoute from './routes/clientRoute.js'
import clientsViewRoute from './routes/clientsViewRoute.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar el middleware CORS
app.use(cors())
app.use(express.json())
app.use("/", loginRoutes)
app.get("/clients-view", clientsViewRoute)
app.post("/api/clients", clientRoute)





try {
  await db.authenticate()
  console.log("esta conectado")
  
} catch (error) {
  console.log(error)
  
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});