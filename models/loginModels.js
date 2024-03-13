// Importar el objeto 'db' desde el archivo db.js
import  db  from "../db.js";
// Importar el tipo de datos 'DataTypes' desde Sequelize
import { DataTypes } from "sequelize";

// Definir el modelo de la tabla de usuarios para la base de datos
const LoginModel = db.define("users", {
    // Definir el campo 'id_user' como un entero, y lo establece como clave primaria
    id_user:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    // Definir el campo 'nombre' como una cadena de texto que no puede ser nula
    nombre: {
        type: DataTypes.STRING,
        allowNull: false // Asegura que el campo no pueda ser nulo
    },
    // Definir el campo 'password' como una cadena de texto que no puede ser nula
    password: {
        type: DataTypes.STRING,
        allowNull: false // Asegura que el campo no pueda ser nulo
    }
});

// Exportar el modelo de usuario para su uso en otras partes de la aplicación
export default LoginModel;
