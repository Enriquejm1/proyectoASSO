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
exports.updatePersonalesAlumno = exports.postPersonalesAlumno = exports.deletePersonalesAlumno = exports.getPersonalesAlumnos = exports.getAlumnoDatospersonales = void 0;
const datosPersonalesAlumno_1 = __importDefault(require("../models/datosPersonalesAlumno"));
const getAlumnoDatospersonales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPersonalesAlumnos = yield datosPersonalesAlumno_1.default.findAll();
    res.json({
        listPersonalesAlumnos,
        msg: 'get Personales Alumnos'
    });
});
exports.getAlumnoDatospersonales = getAlumnoDatospersonales;
const getPersonalesAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const alumno = yield datosPersonalesAlumno_1.default.findByPk(id);
    if (alumno) {
        res.json(alumno);
    }
    else {
        res.status(404).json({
            msg: 'No existe los datos personales del alumno con ese id'
        });
    }
});
exports.getPersonalesAlumnos = getPersonalesAlumnos;
const deletePersonalesAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asesor = yield datosPersonalesAlumno_1.default.findByPk(id);
    if (!asesor) {
        res.status(404).json({
            msg: "No exiten los datos personales del alumno correspondiente"
        });
    }
    else {
        yield asesor.destroy();
        res.json({
            msg: 'Los datos del alumno fueron eliminados correctamente'
        });
    }
});
exports.deletePersonalesAlumno = deletePersonalesAlumno;
const postPersonalesAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield datosPersonalesAlumno_1.default.create(body);
        res.json({
            msg: "Los datos personales del alumno fueron registrados con exito"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ocurrio un error, comuniquese con soporte"
        });
    }
});
exports.postPersonalesAlumno = postPersonalesAlumno;
const updatePersonalesAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const asesor = yield datosPersonalesAlumno_1.default.findByPk(id);
        if (asesor) {
            yield asesor.update(body);
            res.json({
                msg: 'Los datos personales del alumno fueron actualizado exitosamente'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe el alumno con ese id'
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
exports.updatePersonalesAlumno = updatePersonalesAlumno;
