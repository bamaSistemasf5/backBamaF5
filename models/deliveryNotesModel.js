import  db  from "../database/db.js";
import { DataTypes } from "sequelize";

const deliveryNotesModel = db.define(
  "vista_albaranes",
  {
    id_albaran: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cif_cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    concepto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    importe: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    // Desactiva la creación automática de 'createdAt' y 'updatedAt'
    timestamps: false,
  }
);

export default deliveryNotesModel;
