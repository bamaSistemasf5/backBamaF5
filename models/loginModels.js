import db from "../database/db.js";
import { DataTypes } from "sequelize";

const LoginModel = db.define(
  "users",
  {
    id_rol: {
      type: DataTypes.INTEGER, // Cambia el tipo de datos a INTEGER para almacenar el ID del rol
      allowNull: false,
      references: {
        model: "roles", // Nombre de la tabla de roles
        key: "id", // Nombre de la columna de ID en la tabla de roles
      },
    },
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Desactiva la creación automática de 'createdAt' y 'updatedAt'
    timestamps: false,
  }
);

export default LoginModel;
