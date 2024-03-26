import db from "../database/db.js";
import { DataTypes } from "sequelize";

const DevileryNotesModel = db.define(
  "vista_albaranes",
  {
    "No albarán": {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "No albarán" // Este atributo indica a Sequelize el nombre de la columna en la base de datos
    },
    "Fecha albarán": {
      type: DataTypes.DATE,
    },
    Cliente: {
      type: DataTypes.STRING,
    },
    "CIF cliente": {
      type: DataTypes.STRING,
    },
    Importe: {
      type: DataTypes.DECIMAL(37, 2),
    },
    "Facturado o no facturado": { // Nombre de la columna con espacios y caracteres especiales
      type: DataTypes.STRING,
      field: "Facturado o no facturado" // Nombre de la columna en la base de datos
    },
    Pedido: {
      type: DataTypes.INTEGER,
    },
    Producto: {
      type: DataTypes.INTEGER,
    },
    Firmado: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "vista_albaranes",
    timestamps: false,
  }
);

export default DevileryNotesModel;

