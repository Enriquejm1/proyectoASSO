import { Request, Response } from "express"
import datosMateria from "../models/materia"


export const getMaterias = async (req: Request, res: Response) => {
    const listMaterias = await datosMateria.findAll()
    res.json(
        {
            listMaterias,
            msg: 'get Materias'
        }
    )
}

export const getMateria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const materia = await datosMateria.findByPk(id);

    if (materia) {
        res.json(materia)
    } else {
        res.status(404).json({
            msg: 'No existe los datos personales del alumno con ese id'
        })
    }
}

export const deleteMateria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const materia = await datosMateria.findByPk(id);

    if (!materia) {
        res.status(404).json({
            msg: "No exite esta materia correspondiente"
        })
    } else {
        await materia.destroy();
        res.json({
            msg: 'Los datos de la materia fueron eliminados correctamente'
        })
    }
}

export const postMateria = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await datosMateria.create(body);

        res.json({
            msg: "La materia fue agregada con exito"
        })
    } catch (error) {
     console.log(error);
     res.json({
        msg: "Ocurrio un error, comuniquese con soporte"
    })
    }
}

export const updateMateria = async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;


    try {
        const materia = await datosMateria.findByPk(id);

        if(materia){
          await materia.update(body);
          res.json({
            msg:'Los datos de la materia fueron actualizados exitosamente'
          })
        }else{
            res.status(404).json({
                msg: 'No existe la materia'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        })
    }
}