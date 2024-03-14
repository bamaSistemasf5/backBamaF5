// loginController.js
import jwt from "jsonwebtoken";
import LoginModel from "../models/loginModels.js";

export const LoginUsers = async (req, res) => {
    try {
        const user = await LoginModel.findOne({ 
            where: { nombre: req.body.nombre }
        });

        if (!user || req.body.password !== user.password) {
            return res.status(401).json({ message: "Nombre de usuario o contraseña incorrectos" });
        }

        const role = user.id_rol === 2 ? 'admin' : 'usuario'; 

        const token = jwt.sign({
            username: user.name_user,
            userId: user.id_user,
            role: role,
        }, "codesecret");

        // Establecer las cookies
        res.cookie('username', user.name_user, { maxAge: 86400000, httpOnly: true });
        res.cookie('role', role, { maxAge: 86400000, httpOnly: true });
        
        res.status(200).json({ token, message: `Inicio de sesión exitoso como ${role === 'admin' ? 'administrador' : 'usuario'}` });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};








