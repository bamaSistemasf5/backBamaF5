import db from "../database/db.js";
import { DataTypes } from "sequelize";

const OrdersModel = db.define(
  "vista_pedidos",
  {
    id_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cif_cliente: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: "cliente",
        key: "cif_cliente",
      },
    },
    fecha_pedido: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    base_imponible: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    iva_total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    albaranes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "vista_pedidos",
    timestamps: false,
  }
);

export default OrdersModel;