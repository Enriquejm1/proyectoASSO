import { Request, Response } from "express"
import datosPersonalesAlumno from "../models/datosPersonalesAlumno"


export const getAlumnoDatospersonales = async (req: Request, res: Response) => {
    const listPersonalesAlumnos = await datosPersonalesAlumno.findAll()
    res.json(
        {
            listPersonalesAlumnos,
            msg: 'get Personales Alumnos'
        }
    )
}

export const getPersonalesAlumnos = async (req: Request, res: Response) => {
    const { id } = req.params;
    const alumno = await datosPersonalesAlumno.findByPk(id);

    if (alumno) {
        res.json(alumno)
    } else {
        res.status(404).json({
            msg: 'No existe los datos personales del alumno con ese id'
        })
    }

}

export const deletePersonalesAlumno = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asesor = await datosPersonalesAlumno.findByPk(id);

    if (!asesor) {
        res.status(404).json({
            msg: "No exiten los datos personales del alumno correspondiente"
        })
    } else {
        await asesor.destroy();
        res.json({
            msg: 'Los datos del alumno fueron eliminados correctamente'
        })
    }
}

export const postPersonalesAlumno = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await datosPersonalesAlumno.create(body);

        res.json({
            msg: "Los datos personales del alumno fueron registrados con exito"
        })
    } catch (error) {
     console.log(error);
     res.json({
        msg: "Ocurrio un error, comuniquese con soporte"
    })
    }
}


export const updatePersonalesAlumno = async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;


    try {
        const asesor = await datosPersonalesAlumno.findByPk(id);

        if(asesor){
          await asesor.update(body);
          res.json({
            msg:'Los datos personales del alumno fueron actualizado exitosamente'
          })
        }else{
            res.status(404).json({
                msg: 'No existe el alumno con ese id'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        })
    }
}