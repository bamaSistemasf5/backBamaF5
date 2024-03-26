import db from "../database/db.js";
import { DataTypes } from "sequelize";

const CreateinvoicesModel = db.define(
  "facturas",
  {
    id_factura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pedido: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: "pedidos",
        key: "id_pedido",
      },
    },
    cif_cliente: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: "cliente",
        key: "cif_cliente",
      },
    },
    fecha_fact: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    porcentaje_iva: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total_factura: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  },
  {
    tableName: "Crear Factura",
    timestamps: false,
  }
);

export default CreateinvoicesModel;