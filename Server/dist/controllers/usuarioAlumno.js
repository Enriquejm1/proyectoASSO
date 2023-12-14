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
exports.getUsuarioAlumno = exports.getusuariosAalumnos = void 0;
const usuariosAsesores_1 = __importDefault(require("../models/usuariosAsesores"));
const getusuariosAalumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsuariosAlumnos = yield usuariosAsesores_1.default.findAll({
        where: {
            tipo: 'alumno',
        },
    });
    res.json({
        listUsuariosAlumnos,
        msg: 'get Usuarios Alumnos'
    });
});
exports.getusuariosAalumnos = getusuariosAalumnos;
const getUsuarioAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asesor = yield usuariosAsesores_1.default.findByPk(id);
    //const asesores = 
    if (asesor) {
        res.json(asesor);
    }
    else {
        res.status(404).json({
            msg: 'No existe el usuario con ese id'
        });
    }
});
exports.getUsuarioAlumno = getUsuarioAlumno;
