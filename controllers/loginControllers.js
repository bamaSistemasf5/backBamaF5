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

        // Ahora, en lugar de buscar el rol en otro modelo, 
        // simplemente usamos el id_rol para determinar el rol
        const role = user.id_rol === 2 ? 'admin' : 'usuario'; // Ejemplo simple, ajusta según tus necesidades

        // Verificar el rol del usuario y personalizar la respuesta en consecuencia
        const roleResponse = {
            message: `Inicio de sesión exitoso como ${role === 'admin' ? 'administrador' : 'usuario'}`,
            role: role
        };

        const token = jwt.sign({
            userId: user.id_user,
            role: role,
        }, "codesecret");
        
        res.status(200).json({ token, ...roleResponse });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};






