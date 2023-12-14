import { Request, Response } from "express"
import MateriAlumno from "../models/MateriaAlumno";

export const getMateriaAlumnos = async (req: Request, res: Response) => {
    const listAsesores = await MateriAlumno.findAll();//Obteniendo todos registros
    res.json(
        {
            listAsesores,
            msg: 'get Cursos Alumnos'
        }
    )
}

export const getAlumnoMateria = async (req: Request, res: Response) => {
    const { id } = req.params;
    const MateriaA = await MateriAlumno.findByPk(id);//Obteniendo solo un registro con el Id correspondiente

    if (MateriaA) {
        res.json(MateriaA)
    } else {
        res.status(404).json({
            msg: 'No existe'
        })
    }
}

export const postMateriaAlumno = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await MateriAlumno.create(body);

        res.json({
            msg: "Regisrtro Exitoso"
        })
    } catch (error) {
     console.log(error);
     res.json({
        msg: "Ocurrio un error, comuniquese con soporte"
    })
    }
}

export const deleteMA = async (req: Request, res: Response) => {
    const { id } = req.params;
    const ac = await MateriAlumno.findByPk(id);

    if (!ac) {
        res.status(404).json({
            msg: "No exiten estos datos"
        })
    } else {
        await ac.destroy();
        res.json({
            msg: 'Los datos  fueron eliminados correctamente'
        })
    }
}

export const updateAM= async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;


    try {
        const am = await MateriAlumno.findByPk(id);

        if(am){
          await am.update(body);
          res.json({
            msg:'El registro  fue actualizado exitosamente'
          })
        }else{
            res.status(404).json({
                msg: 'No existe este registro'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        })
    }
}
