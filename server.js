import express from 'express';
import cors from 'cors';
import db from './database/db.js';

import clientRoutes from './routes/clientRoutes.js';
import deliveryNotesRoutes from './routes/deliveryNotesRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';

const app = express();

const PORT = 3000;

// Configurar el middleware CORS
app.use(cors());

app.use(express.json());
app.use("/", loginRoutes);
app.use("/client", clientRoutes);
app.use("/delivery-note", deliveryNotesRoutes);
app.use("/order", ordersRoutes);

try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
