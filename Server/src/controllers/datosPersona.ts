import {Request, Response} from 'express';
import Persona from '../models/datosPersonaM';

export const getDatosPersonas = async (req: Request, res: Response) => {
    
    const listaPersonas = await Persona.findAll();

    res.json(listaPersonas);
}


export const getDatosPersona = async (req: Request, res: Response) => {
    const { id } = req.params;
    const persona = await Persona.findByPk(id);

    if(persona){
        res.json(persona)
    }else{
        res.status(404).json({
            msg: `No existe una persona con el id ${id}`
        })
    }
}

export const deleteDatosPersona = async (req: Request, res: Response) => {
    const { id } = req.params;
    const persona = await Persona.findByPk(id);
    
    if(!persona){
        res.status(404).json({
            msg: `No existe una persona con el id ${id}`
        })
    }else{
        await persona.destroy();
        res.json({
            msg: 'La persona fue eliminada con exito!'
        })
    }
}

export const postDatosPersona = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Persona.create(body);

        res.json({
            msg: 'La persona fue agregada con exito!'
        });
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps ocurrio un error, comuniquese con soporte'
        });
    }
}

export const updateDatosPersona = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const persona = await Persona.findByPk(id);
    
        if(persona){
            await persona.update(body);
            res.json({
                msg: 'La persona fue actualizada con exito'
            })
        }else{
            res.status(404).json({
                msg: `No existe una persona con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps ocurrio un error, comuniquese con soporte'
        });
    }
    
}