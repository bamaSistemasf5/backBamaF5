import LoginModels from "../models/loginModels.js";


export const LoginUsers= async (req, res) => {
    // const { nombre,password } = req.body;
    // const findUser = await LoginModels.findOne({where:{id_user:req.params.id}});
    const findUser = await LoginModels.findAll();
    res.status(200).json(findUser)
    // console.log(findUser);
    // console.log(nombre);
}
//     console.log('Datos recibidos:', { nombre, password });
  
//    try { const users = new LoginModels ( {
//       nombre,
//       password
//     });
    
//     res.status(200).json({
//         message:"todo muy way ",users
//     })
    
//    } catch (error) {
//     console.log(error)
//     res.status(500).json({
//         message:"todo mal ",error
//    })
// }
// }
    // app.get('/api/users',(req,res)=>{
    //   try {
    //     const users=
    //   } catch (error) {
        
    //   }
    // })