import db from "../database/db.js";
import { DataTypes } from "sequelize";

const LoginModel = db.define("users", {
  id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
  nombre: {
      type: DataTypes.STRING,
      allowNull: false
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
  },
  id_rol: {
      type: DataTypes.INTEGER, // Cambia el tipo de datos a INTEGER para almacenar el ID del rol
      allowNull: false,
      references: {
          model: 'roles', // Nombre de la tabla de roles
          key: 'id' // Nombre de la columna de ID en la tabla de roles
      }
  }
});

export default LoginModel;
