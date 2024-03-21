import jwt from "jsonwebtoken";
import LoginModel from "../models/loginModel.js";

export const LoginUsers = async (req, res) => {
    try {
        const user = await LoginModel.findOne({ 
            where: { nombre: req.body.nombre }
        });

        if (!user || req.body.password !== user.password) {
            return res.status(401).json({ message: "Username or password incorrect" });
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
        
        
        res.status(200).json({ token,userid, message: ` Successful login as ${role === 'admin' ? 'administrator' : 'user'}`});
    } catch (error) {
        console.error("Failed to login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};








