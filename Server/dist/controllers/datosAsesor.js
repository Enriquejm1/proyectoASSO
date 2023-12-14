"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAsesor = exports.postAsesor = exports.getAsesor = exports.getAsesores = void 0;
const asesores_1 = __importDefault(require("../models/asesores"));
const usuariosAsesores_1 = __importDefault(require("../models/usuariosAsesores"));
const getAsesores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAsesores = yield asesores_1.default.findAll(); //Obteniendo todos los asesores
    res.json({
        listAsesores,
        msg: 'get asesores'
    });
});
exports.getAsesores = getAsesores;
const getAsesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asesor = yield asesores_1.default.findByPk(id); //Obteniendo solo el asesor con el Id correspondiente
    if (asesor) {
        res.json(asesor);
    }
    else {
        res.status(404).json({
            msg: 'No existe los datos del Asesor'
        });
    }
});
exports.getAsesor = getAsesor;
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
const postAsesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const cuerpo = body;
    //Buscando el ultimo usuario agregado
    const listUsuariosAsesores = yield usuariosAsesores_1.default.findAll(); //Buscando en usuarios
    let tama = listUsuariosAsesores.length; //Total de los usuarios actuales
    const usuarios = listUsuariosAsesores[tama - 1]; //Obteniendo al ultimo usuario registrado
    const tipo_usuario = usuarios.dataValues.tipo;
    if (tipo_usuario == 'asesor') {
        //console.log(usuarios.dataValues.id);
        const usuario_id = usuarios.dataValues.id; //Obteniendo el ID del ultimo usuario
        //console.log(usuario_id);
        //console.log(cuerpo); 
        cuerpo.Id_usuario = usuario_id;
        //console.log(cuerpo); 
        try {
            yield asesores_1.default.create(cuerpo);
            res.json({
                msg: "El Asesor fue agregado con exito"
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                msg: "Ocurrio un error, comuniquese con soporte"
            });
        }
    }
    else {
        res.json({
            msg: "El usuario no es de tipo Asesor, comuniquese con soporte"
        });
    }
});
exports.postAsesor = postAsesor;
const updateAsesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const Asesor = yield asesores_1.default.findByPk(id);
        if (Asesor) {
            yield Asesor.update(body);
            res.json({
                msg: 'Los datos del asesor fueron actualizados exitosamente'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe el asesor'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        });
    }
});
exports.updateAsesor = updateAsesor;
