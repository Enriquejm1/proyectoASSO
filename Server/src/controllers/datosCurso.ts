import { Request, Response } from "express"
import datosCurso from "../models/curso"

export const getCursos = async (req: Request, res: Response) => {
    const listCurso = await datosCurso.findAll()
    res.json(
        {
            listCurso,
            msg: 'get Cursos'
        }
    )
}


export const getCurso = async (req: Request, res: Response) => {
    const { id } = req.params;
    const curso = await datosCurso.findByPk(id);

    if (curso) {
        res.json(curso)
    } else {
        res.status(404).json({
            msg: 'No existe ese curso'
        })
    }
}

export const deleteCurso = async (req: Request, res: Response) => {
    const { id } = req.params;
    const Curso = await datosCurso.findByPk(id);

    if (!Curso) {
        res.status(404).json({
            msg: "No exite este curso correspondiente"
        })
    } else {
        await Curso.destroy();
        res.json({
            msg: 'El curso fue eliminado correctamente'
        })
    }
}


export const postCurso = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await datosCurso.create(body);

        res.json({
            msg: "El curso fue agregado con exito"
        })
    } catch (error) {
     console.log(error);
     res.json({
        msg: "Ocurrio un error, comuniquese con soporte"
    })
    }
}

export const updateCurso = async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;


    try {
        const Curso = await datosCurso.findByPk(id);

        if(Curso){
          await Curso.update(body);
          res.json({
            msg:'Los datos del curso fueron actualizados exitosamente'
          })
        }else{
            res.status(404).json({
                msg: 'No existe ese curso'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        })
    }
}