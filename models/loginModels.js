import db from "../db.js";
import { DataTypes } from "sequelize";

const LoginModel = db.define("users", {
    id_user:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false // Asegura que el campo no pueda ser nulo
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false // Asegura que el campo no pueda ser nulo
    }
});

export default LoginModel;
