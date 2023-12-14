import { Request, Response } from "express"
import CursoAlumno from "../models/CursoAlumno";


export const getCursosAlumnos = async (req: Request, res: Response) => {
    const listAsesores = await CursoAlumno.findAll();//Obteniendo todos registros
    res.json(
        {
            listAsesores,
            msg: 'get Cursos Alumnos'
        }
    )
}

export const getAlumnoCurso = async (req: Request, res: Response) => {
    const { id } = req.params;
    const CursoA = await CursoAlumno.findByPk(id);//Obteniendo solo un registro con el Id correspondiente

    if (CursoA) {
        res.json(CursoA)
    } else {
        res.status(404).json({
            msg: 'No existe'
        })
    }
}

export const postCursoAlumno = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await CursoAlumno.create(body);

        res.json({
            msg: "Regisrtro Exitoso"
        })
    } catch (error) {
     console.log(error);
     res.json({
        msg: "Ocurrio un error, comuniquese con soporte"
    })
    }

    /* res.json(
         {
             msg:'post Usuario Asesor',
             body
         }
     )*/
}

export const deleteCA = async (req: Request, res: Response) => {
    const { id } = req.params;
    const ac = await CursoAlumno.findByPk(id);

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



export const updateAC= async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;


    try {
        const ac = await CursoAlumno.findByPk(id);

        if(ac){
          await ac.update(body);
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