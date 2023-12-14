import { Request, Response } from "express"
import datosAsesores from "../models/asesores"
import usuarioAsesor from "../models/usuariosAsesores"


export const getAsesores = async (req: Request, res: Response) => {
    const listAsesores = await datosAsesores.findAll();//Obteniendo todos los asesores
    res.json(
        {
            listAsesores,
            msg: 'get asesores'
        }
    )
}


export const getAsesor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asesor = await datosAsesores.findByPk(id);//Obteniendo solo el asesor con el Id correspondiente

    if (asesor) {
        res.json(asesor)
    } else {
        res.status(404).json({
            msg: 'No existe los datos del Asesor'
        })
    }
}


//Estos datos se borra cuando se borra el usuario
/*export const deleteAsesor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asesor = await datosAsesores.findByPk(id);

    if (!asesor) {
        res.status(404).json({
            msg: "No exite este asesor"
        })
    } else {
        await asesor.destroy();
        res.json({
            msg: 'Los datos del asesor fueron eliminados correctamente'
        })
    }
}*/

export const postAsesor = async (req: Request, res: Response) => {
    const { body } = req;
    const cuerpo = body;

    //Buscando el ultimo usuario agregado
    const listUsuariosAsesores = await usuarioAsesor.findAll();//Buscando en usuarios
    let tama = listUsuariosAsesores.length;//Total de los usuarios actuales
    const usuarios = listUsuariosAsesores[tama - 1];//Obteniendo al ultimo usuario registrado
    const tipo_usuario = usuarios.dataValues.tipo;
    if (tipo_usuario == 'asesor') {
        //console.log(usuarios.dataValues.id);
        const usuario_id = usuarios.dataValues.id;//Obteniendo el ID del ultimo usuario
        //console.log(usuario_id);
        //console.log(cuerpo); 
        cuerpo.Id_usuario = usuario_id;
        //console.log(cuerpo); 

        try {
            await datosAsesores.create(cuerpo);

            res.json({
                msg: "El Asesor fue agregado con exito"
            })
        } catch (error) {
            console.log(error);
            res.json({
                msg: "Ocurrio un error, comuniquese con soporte"
            })
        }

    } else {
        res.json({
            msg: "El usuario no es de tipo Asesor, comuniquese con soporte"
        })
    }
}

export const updateAsesor = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;


    try {
        const Asesor = await datosAsesores.findByPk(id);

        if (Asesor) {
            await Asesor.update(body);
            res.json({
                msg: 'Los datos del asesor fueron actualizados exitosamente'
            })
        } else {
            res.status(404).json({
                msg: 'No existe el asesor'
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        })
    }
}