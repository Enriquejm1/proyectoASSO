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
exports.updateAM = exports.deleteMA = exports.postMateriaAlumno = exports.getAlumnoMateria = exports.getMateriaAlumnos = void 0;
const MateriaAlumno_1 = __importDefault(require("../models/MateriaAlumno"));
const getMateriaAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAsesores = yield MateriaAlumno_1.default.findAll(); //Obteniendo todos registros
    res.json({
        listAsesores,
        msg: 'get Cursos Alumnos'
    });
});
exports.getMateriaAlumnos = getMateriaAlumnos;
const getAlumnoMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const MateriaA = yield MateriaAlumno_1.default.findByPk(id); //Obteniendo solo un registro con el Id correspondiente
    if (MateriaA) {
        res.json(MateriaA);
    }
    else {
        res.status(404).json({
            msg: 'No existe'
        });
    }
});
exports.getAlumnoMateria = getAlumnoMateria;
const postMateriaAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield MateriaAlumno_1.default.create(body);
        res.json({
            msg: "Regisrtro Exitoso"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ocurrio un error, comuniquese con soporte"
        });
    }
});
exports.postMateriaAlumno = postMateriaAlumno;
const deleteMA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ac = yield MateriaAlumno_1.default.findByPk(id);
    if (!ac) {
        res.status(404).json({
            msg: "No exiten estos datos"
        });
    }
    else {
        yield ac.destroy();
        res.json({
            msg: 'Los datos  fueron eliminados correctamente'
        });
    }
});
exports.deleteMA = deleteMA;
const updateAM = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const am = yield MateriaAlumno_1.default.findByPk(id);
        if (am) {
            yield am.update(body);
            res.json({
                msg: 'El registro  fue actualizado exitosamente'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe este registro'
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
exports.updateAM = updateAM;
