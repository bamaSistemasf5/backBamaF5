import db from "../database/db.js";
import { DataTypes } from "sequelize";

const OrdersModel = db.define(
  "pedidos",
  {
    id_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cif_cliente: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: "Cliente",
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
    documento: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },
  },
  {
    tableName: "pedidos",
    timestamps: false,
  }
);

export default OrdersModel;