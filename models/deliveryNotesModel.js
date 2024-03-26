import db from "../database/db.js";
import { DataTypes } from "sequelize";

const DevileryNotesModel = db.define(
  "vista_albaranes",
  {
    albaran: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'albaran' // Aquí se utiliza 'albaran' como una cadena de caracteres
    },
    fecha_albaran: {
      type: DataTypes.DATE,
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cif_cliente: {
      type: DataTypes.STRING,
    },
    importe: {
      type: DataTypes.DECIMAL(37, 2),
    },
    facturado_o_no_facturado: {
      type: DataTypes.STRING,
      field: 'facturado_o_no_facturado' // Aquí también se utiliza 'facturado_o_no_facturado' como una cadena de caracteres
    },
    pedido: {
      type: DataTypes.INTEGER,
    },
    producto: {
      type: DataTypes.INTEGER,
    },
    firmado: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "vista_albaranes",
    timestamps: false,
  }
);

export default DevileryNotesModel;


