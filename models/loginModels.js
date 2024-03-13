import db from "../db.js"
import { DataTypes} from "sequelize"

const LoginModels=db.define("users",{
    nombre:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING}
})
export default LoginModels;