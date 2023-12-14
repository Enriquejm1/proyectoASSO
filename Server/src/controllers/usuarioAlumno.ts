import { Request, Response } from "express";
import usuarioAsesor from "../models/usuariosAsesores";

export const getusuariosAalumnos = async (req: Request, res: Response) => {
    const listUsuariosAlumnos = await usuarioAsesor.findAll({
        where: {
          tipo: 'alumno',
        },
      });
    res.json(
        {
            listUsuariosAlumnos,
            msg: 'get Usuarios Alumnos'
        }
    )
}

export const getUsuarioAlumno = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asesor = await usuarioAsesor.findByPk(id);
    //const asesores = 
    if (asesor) {
        res.json(asesor)
    } else {
        res.status(404).json({
            msg: 'No existe el usuario con ese id'
        })
    }

}