import jwt from "jsonwebtoken";
import LoginModels from "../models/loginModels.js";

// Controlador para manejar la solicitud de inicio de sesión de los usuarios
export const LoginUsers = async (req, res) => {
    try {
        // Buscar al usuario en la base de datos
        const user = await LoginModels.findOne({ where: { nombre: req.body.nombre } });

        // Verificar si el usuario existe y si la contraseña es correcta
        if (!user || req.body.password !== user.password) {
            return res.status(401).json({ message: "Nombre de usuario o contraseña incorrectos" });
        }

        // Generar un token de autenticación
        const token = jwt.sign({
            userId: user.id,
            role: user.role,
        }, "codesecret");
        

        // Devolver el token como respuesta
        res.status(200).json({ token });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};




