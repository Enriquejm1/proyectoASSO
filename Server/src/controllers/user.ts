import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import usuarios from "../models/usuarios";
import jwt from 'jsonwebtoken'

export const newUser =async (req:Request,res:Response)=>{
   const{body}=req;
   res.json({
    msg:"login user",
    body
})
/*
    const user= await usuarios.findOne({where:{correo_electronico:correo}})

    if(user){
       return res.status(400).json({
            msg:'Ya existe el usuario'
        })
    }

    const haspass= await  bcrypt.hash(contra,10);
    //console.log(haspass);
    
    try {
        await usuarios.create({
            correo_electornico:correo,
            contra:contra
    
        })
        
        res.json({
  
            msg:'New user'
        })
    } catch (error) {
        res.status(400).json({
            msg:'Ocurrio un error',
            error
        })
    }
*/
   
}

export const loginUser = async(req:Request,res:Response)=>{
    const{correo,contra,tipo}=req.body;
    console.log(correo);
    console.log(contra);
    console.log(tipo); 

   //Exite el usuario en la base de datos.
 const user:any= await usuarios.findOne({where:{correo_electronico:correo}})


   if(!user){
    return res.status(400).json({
        msg:'El correo electronico no esta registrado'
    });
   }

   if(contra!=user.contraseña){
    return res.status(400).json({
        msg:'Contraseña Incorrecta'
    })
   }

   if(tipo!=user.Tipo){
    return res.status(400).json({
        msg:'Este usuario no pertenece a esta sección'
    })
   }

/*
const pass =await bcrypt.compare(contra,user.contraseña)

if(!pass){
    return res.status(400).json({
        msg:'Contraseña Incorrecta'
    })
}
*/

   //Generar Token
   const token = jwt.sign({
    correo_electronico:correo
   },process.env.SECRET_KEY || 'PEPITO124'
   );
res.json(token);

}
