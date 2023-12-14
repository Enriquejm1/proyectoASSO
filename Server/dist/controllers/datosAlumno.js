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
exports.updateAlumno = exports.postAlumno = exports.getAlumno = exports.getAlumnos = void 0;
const alumno_1 = __importDefault(require("../models/alumno"));
const usuariosAsesores_1 = __importDefault(require("../models/usuariosAsesores"));
const getAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAlumnos = yield alumno_1.default.findAll();
    res.json({
        listAlumnos,
        msg: 'get Alumnos'
    });
});
exports.getAlumnos = getAlumnos;
const getAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const alumno = yield alumno_1.default.findByPk(id);
    if (alumno) {
        res.json(alumno);
    }
    else {
        res.status(404).json({
            msg: 'No existe los datos del Alumno'
        });
    }
});
exports.getAlumno = getAlumno;
const postAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const cuerpo = body;
    //Buscando el ultimo usuario agregado
    const listUsuariosAsesores = yield usuariosAsesores_1.default.findAll(); //Buscando en usuarios
    let tama = listUsuariosAsesores.length; //Total de los usuarios actuales
    const usuarios = listUsuariosAsesores[tama - 1]; //Obteniendo al ultimo usuario registrado
    //console.log(usuarios.dataValues.id);
    const tipo_usuario = usuarios.dataValues.tipo;
    if (tipo_usuario == 'alumno') {
        const usuario_id = usuarios.dataValues.id; //Obteniendo el ID del ultimo usuario
        //console.log(usuario_id);
        //console.log(cuerpo); 
        cuerpo.Id_usuario_alumno = usuario_id;
        //        console.log(cuerpo);
        try {
            yield alumno_1.default.create(cuerpo);
            res.json({
                msg: "El Alumno fue agregado con exito"
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
            msg: "El usuario no es de tipo alumno, comuniquese con soporte"
        });
    }
});
exports.postAlumno = postAlumno;
const updateAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const Alumno = yield alumno_1.default.findByPk(id);
        if (Alumno) {
            yield Alumno.update(body);
            res.json({
                msg: 'Los datos del Alumno fueron actualizados exitosamente'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe el Alumno'
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
exports.updateAlumno = updateAlumno;
