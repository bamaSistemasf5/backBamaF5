// loginController.js
import jwt from "jsonwebtoken";
import LoginModel from "../models/loginModels.js";
import User from '../models/usersModels.js';

export const LoginUsers = async (req, res) => {
    try {
        const user = await LoginModel.findOne({ 
            where: { nombre: req.body.nombre }
        });

        if (!user || req.body.password !== user.password) {
            return res.status(401).json({ message: "Nombre de usuario o contraseña incorrectos" });
        }

        const role = user.id_rol === 2 ? 'admin' : 'usuario'; 

        const userid = user.id_user;

        const token = jwt.sign({
            username: user.name_user,
            userId: user.id_user,
            role: role,
        }, "codesecret");

        // Establecer las cookies
        res.cookie('username', user.name_user, { httpOnly: true });
        res.cookie('role', role, {httpOnly: true });
        console.log(role);
        
        
        res.status(200).json({ token,userid, message: `Inicio de sesión exitoso como ${role === 'admin' ? 'administrador' : 'usuario'}`});
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};



const getUsers = async (req, res) => {
    const userId = req.params.id; // Corregido para que coincida con el nombre del parámetro en la ruta
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", userId });
        }
        res.status(200).json({ message: "User found", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", userId });
    }
};

export default getUsers;





 



