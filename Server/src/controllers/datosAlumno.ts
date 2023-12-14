import { Request, Response } from "express";
import datosAlumno from "../models/alumno";
import usuarioAsesor from "../models/usuariosAsesores";

export const getAlumnos = async (req: Request, res: Response) => {
    const listAlumnos = await datosAlumno.findAll()
    res.json(
        {
            listAlumnos,
            msg: 'get Alumnos'
        }
    )
}

export const getAlumno = async (req: Request, res: Response) => {
    const { id } = req.params;
    const alumno = await datosAlumno.findByPk(id);

    if (alumno) {
        res.json(alumno)
    } else {
        res.status(404).json({
            msg: 'No existe los datos del Alumno'
        })
    }
}

export const postAlumno = async (req: Request, res: Response) => {
    const { body } = req;
    const cuerpo = body;
    
    //Buscando el ultimo usuario agregado
    const listUsuariosAsesores = await usuarioAsesor.findAll();//Buscando en usuarios
    let tama=listUsuariosAsesores.length;//Total de los usuarios actuales
     const usuarios=listUsuariosAsesores[tama-1];//Obteniendo al ultimo usuario registrado
     //console.log(usuarios.dataValues.id);

     const tipo_usuario=usuarios.dataValues.tipo;
     
     if(tipo_usuario=='alumno'){

        const usuario_id=usuarios.dataValues.id;//Obteniendo el ID del ultimo usuario
        //console.log(usuario_id);
        //console.log(cuerpo); 
        cuerpo.Id_usuario_alumno = usuario_id;
//        console.log(cuerpo);
        
       try {
           await datosAlumno.create(cuerpo);
   
           res.json({
               msg: "El Alumno fue agregado con exito"
           })
       } catch (error) {
        console.log(error);
        res.json({
           msg: "Ocurrio un error, comuniquese con soporte"
       })
       }

     }else{
        res.json({
           msg: "El usuario no es de tipo alumno, comuniquese con soporte"
       })
     }

}

export const updateAlumno = async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const Alumno = await datosAlumno.findByPk(id);

        if(Alumno){
          await Alumno.update(body);
          res.json({
            msg:'Los datos del Alumno fueron actualizados exitosamente'
          })
        }else{
            res.status(404).json({
                msg: 'No existe el Alumno'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        })
    }
}