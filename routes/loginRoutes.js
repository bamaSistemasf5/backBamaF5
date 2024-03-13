// Importar el módulo Express
import express from "express";
// Importar el controlador para la función de inicio de sesión
import { LoginUsers } from "../controllers/loginControllers.js";

// Crear un nuevo enrutador utilizando Express
const routes = express.Router();

// Definir una ruta POST en la raíz del enrutador
// Esta ruta manejará las solicitudes de inicio de sesión
routes.post("/", LoginUsers);

// Exportar el enrutador para su uso en otros archivos
export default routes;
