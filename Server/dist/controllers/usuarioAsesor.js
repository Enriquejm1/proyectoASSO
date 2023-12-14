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
exports.updateUsuario = exports.postUsuario = exports.deleteUsuario = exports.getUsuarioAsesor = exports.getusuariosAsesor = void 0;
const usuariosAsesores_1 = __importDefault(require("../models/usuariosAsesores"));
const getusuariosAsesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsuariosAsesores = yield usuariosAsesores_1.default.findAll({
        where: {
            tipo: 'asesor',
        },
    });
    res.json({
        listUsuariosAsesores,
        msg: 'get Usuarios Asesores'
    });
});
exports.getusuariosAsesor = getusuariosAsesor;
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
const getUsuarioAsesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asesor = yield usuariosAsesores_1.default.findByPk(id);
    if (asesor) {
        res.json(asesor);
    }
    else {
        res.status(404).json({
            msg: 'No existe el usuario con ese id'
        });
    }
});
exports.getUsuarioAsesor = getUsuarioAsesor;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asesor = yield usuariosAsesores_1.default.findByPk(id);
    if (!asesor) {
        res.status(404).json({
            msg: "No exite el usuarios correspondiente"
        });
    }
    else {
        yield asesor.destroy();
        res.json({
            msg: 'El usuario del asesor fue eliminado correctamente'
        });
    }
    /*res.json(
        {
            msg:'delete Usuario Asesor',
            id:id
        }
    )*/
});
exports.deleteUsuario = deleteUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield usuariosAsesores_1.default.create(body);
        res.json({
            msg: "El usuario  fue registrado con exito"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ocurrio un error, comuniquese con soporte"
        });
    }
    /* res.json(
         {
             msg:'post Usuario Asesor',
             body
         }
     )*/
});
exports.postUsuario = postUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const asesor = yield usuariosAsesores_1.default.findByPk(id);
        if (asesor) {
            yield asesor.update(body);
            res.json({
                msg: 'El Usuario  fue actualizado exitosamente'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe el usuario con ese id'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con soporte'
        });
    }
    /*res.json(
        {
            msg: 'put Usuario Asesor',
            id: id,
            body
        }
    )*/
});
exports.updateUsuario = updateUsuario;
