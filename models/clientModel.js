import db from "../database/db.js";
import { DataTypes } from "sequelize";

const clientModel = db.define(
  "clientes",
  {
    cif_cliente: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true, // Especifica que 'cif_cliente' es la clave primaria
    },
    codigo_postal: {
      type: DataTypes.STRING,
      allowNull: yes,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: yes,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poblacion: {
      type: DataTypes.STRING,
      allowNull: yes,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Desactiva la creación automática de 'createdAt' y 'updatedAt'
    timestamps: false,
  }
);

export default clientModel;
