import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';

const validateToken =(req:Request,res:Response,next:NextFunction)=>{
    const headerToken = req.headers['authorization']
   console.log("Hola mundoi:"+headerToken);
    if(headerToken!=undefined){
          //Tienen token
          try {
            const BearerToken = headerToken.slice(7);
              console.log(BearerToken);
              jwt.verify(BearerToken,process.env.SECRET_KEY || 'PEPITO124');
          } catch (error) {
            res.status(401).json({
                msg:'Token no valido'
            })
          }
              
        next()
    }else{
        res.status(401).json({
            msg:'Acceso Denegado'
        })
    }
}

export default validateToken;