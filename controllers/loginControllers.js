// Importar el modelo de login desde el archivo loginModels.js
import LoginModels from "../models/loginModels.js";

// Controlador para manejar la solicitud de inicio de sesión de los usuarios
export const LoginUsers = async (req, res) => {
    // Desestructurar el cuerpo de la solicitud para obtener el nombre y la contraseña del usuario
    // const { nombre, password } = req.body;
    
    // Buscar un usuario en la base de datos que coincida con el nombre proporcionado en la solicitud
    const findUser = await LoginModels.findOne({ where: { nombre: req.body.nombre } });
    // const findUser = await LoginModels.findOne(); // Esta línea podría haber sido utilizada para encontrar el primer usuario en la base de datos sin especificar ninguna condición
    
    // Enviar la respuesta al cliente con el usuario encontrado (o null si no se encuentra ningún usuario)
    res.status(200).json(findUser);
    
    // Estos console.log() están fuera del bloque de código de la función, por lo que no se ejecutarán
    // console.log(findUser);
    // console.log(nombre);
};
