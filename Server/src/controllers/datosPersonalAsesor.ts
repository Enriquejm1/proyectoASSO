import { Request, Response } from "express"
import usuarioAsesor from "../models/usuariosAsesores"
import personalesAsesor from "../models/datosPersonalesAsesor"

export const getAsesorDatospersonales = async (req: Request, res: Response) => {
    const listPersonalesAsesores = await personalesAsesor.findAll()
    res.json(
        {
            listPersonalesAsesores,
            msg: 'get Personales Asesores'
        }
    )
}

export const getPersonalesAsesor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asesor = await personalesAsesor.findByPk(id);

    if (asesor) {
        res.json(asesor)
    } else {
        res.status(404).json({
            msg: 'No existe los datos personales del usuario con ese id'
        })
    }

}

export const deleteUsuarioAsesor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asesor = await personalesAsesor.findByPk(id);

    if (!asesor) {
        res.status(404).json({
            msg: "No exiten los datos personales del usuario correspondiente"
        })
    } else {
        await asesor.destroy();
        res.json({
            msg: 'El usuario del asesor fue eliminado correctamente'
        })
    }
}

export const postPersonalesAsesor = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await personalesAsesor.create(body);

        res.json({
            msg: "Los datos personales del asesor fueron registrados con exito"
        })
    } catch (error) {
     console.log(error);
     res.json({
        msg: "Ocurrio un error, comuniquese con soporte"
    })
    }
}

export const updatePersonalesAsesor = async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;


    try {
        const asesor = await personalesAsesor.findByPk(id);

        if(asesor){
          await asesor.update(body);
          res.json({
            msg:'Los datos personales del asesor fueron actualizado exitosamente'
          })
        }else{
            res.status(404).json({
                msg: 'No existe el usuario con ese id'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        })
    }
}