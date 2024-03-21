import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ClientModel = db.define(
  "clientes",
  {
    cif_cliente: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true, // Especifica que 'cif_cliente' es la clave primaria
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    poblacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    codigo_postal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // Desactiva la creación automática de 'createdAt' y 'updatedAt'
    timestamps: false,
  }
);

export default ClientModel;
