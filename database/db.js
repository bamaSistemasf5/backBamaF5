import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// Cargar variables de entorno
dotenv.config();

// Configurar instancia de Sequelize
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

export default db;
