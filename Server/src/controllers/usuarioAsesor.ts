import { Request, Response } from "express"
import usuarioAsesor from "../models/usuariosAsesores"
import { where } from "sequelize";

export const getusuariosAsesor = async (req: Request, res: Response) => {
    const listUsuariosAsesores = await usuarioAsesor.findAll({
        where: {
          tipo: 'asesor',
        },
      });
    res.json(
        {
            listUsuariosAsesores,
            msg: 'get Usuarios Asesores'
        }
    )
}

/*export const getUltimousuarios = async (req: Request, res: Response) => {
    const listUsuariosAsesores = await usuarioAsesor.findAll();
     tama=listUsuariosAsesores.length;
     const usuarios=listUsuariosAsesores[tama-1];
     usuarios.dataValues.tipo="asesor";
     console.log(usuarios);
     const usuario=usuarios.dataValues.id;
    res.json(
        {
            listUsuariosAsesores,
            msg: 'get Usuarios Asesores'
        }
    )
}*/

export const getUsuarioAsesor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asesor = await usuarioAsesor.findByPk(id);
    if (asesor) {
        res.json(asesor)
    } else {
        res.status(404).json({
            msg: 'No existe el usuario con ese id'
        })
    }

}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const asesor = await usuarioAsesor.findByPk(id);

    if (!asesor) {
        res.status(404).json({
            msg: "No exite el usuarios correspondiente"
        })
    } else {
        await asesor.destroy();
        res.json({
            msg: 'El usuario del asesor fue eliminado correctamente'
        })
    }

    /*res.json(
        {
            msg:'delete Usuario Asesor',
            id:id
        }
    )*/

}

export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await usuarioAsesor.create(body);

        res.json({
            msg: "El usuario  fue registrado con exito"
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

export const updateUsuario = async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;


    try {
        const asesor = await usuarioAsesor.findByPk(id);

        if(asesor){
          await asesor.update(body);
          res.json({
            msg:'El Usuario  fue actualizado exitosamente'
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
    /*res.json(
        {
            msg: 'put Usuario Asesor',
            id: id,
            body
        }
    )*/
}