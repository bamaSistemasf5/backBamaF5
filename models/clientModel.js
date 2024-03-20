import  db  from "../db.js";
import { DataTypes } from "sequelize";


const clientModel = db.define("clientes", {
  cif_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true // Especifica que 'cif_cliente' es la clave primaria
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  poblacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  provincia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo_postal: {
    type: DataTypes.STRING,
    allowNull: false
  },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
  // Desactiva la creación automática de 'createdAt' y 'updatedAt'
  timestamps: false 
});

export default clientModel;
