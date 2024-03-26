import db from "../database/db.js";
import { DataTypes } from "sequelize";

const invoiceModel = db.define("vista_facturas", {
  nro_factura: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true 
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cif_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  fecha_vencimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fecha_cobro: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  base_imponible: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  porcentaje_iva: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  total_factura: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nro_pedido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pedido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  albaran: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  // Desactiva la creación automática de 'createdAt' y 'updatedAt'
  timestamps: false 
});

export default invoiceModel;
