import db from "../database/db.js";
import { DataTypes } from "sequelize";

const DevileryNotesModel = db.define(
  "vista_albaranes",
  {
    No_albaran: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Fecha_albaran: {
      type: DataTypes.DATE,
    },
    Cliente: {
      type: DataTypes.STRING,
    },
    CIF_cliente: {
      type: DataTypes.STRING,
    },
    Importe: {
      type: DataTypes.DECIMAL(37, 2),
    },
    Facturado_o_no_facturado: {
      type: DataTypes.STRING,
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
