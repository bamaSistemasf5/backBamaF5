import db from "../database/db.js";
import { DataTypes } from "sequelize";

const CreateDevileryNotesModel = db.define(
  "albaranes",
  {
    id_albaran: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fecha_albaran: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    Firmado: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "albaranes",
    timestamps: false,
  }
);

export default CreateDevileryNotesModel;