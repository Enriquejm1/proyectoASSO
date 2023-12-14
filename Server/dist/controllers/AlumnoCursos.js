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
exports.updateAC = exports.deleteCA = exports.postCursoAlumno = exports.getAlumnoCurso = exports.getCursosAlumnos = void 0;
const CursoAlumno_1 = __importDefault(require("../models/CursoAlumno"));
const getCursosAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAsesores = yield CursoAlumno_1.default.findAll(); //Obteniendo todos registros
    res.json({
        listAsesores,
        msg: 'get Cursos Alumnos'
    });
});
exports.getCursosAlumnos = getCursosAlumnos;
const getAlumnoCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const CursoA = yield CursoAlumno_1.default.findByPk(id); //Obteniendo solo un registro con el Id correspondiente
    if (CursoA) {
        res.json(CursoA);
    }
    else {
        res.status(404).json({
            msg: 'No existe'
        });
    }
});
exports.getAlumnoCurso = getAlumnoCurso;
const postCursoAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield CursoAlumno_1.default.create(body);
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
    /* res.json(
         {
             msg:'post Usuario Asesor',
             body
         }
     )*/
});
exports.postCursoAlumno = postCursoAlumno;
const deleteCA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ac = yield CursoAlumno_1.default.findByPk(id);
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
exports.deleteCA = deleteCA;
const updateAC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const ac = yield CursoAlumno_1.default.findByPk(id);
        if (ac) {
            yield ac.update(body);
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
exports.updateAC = updateAC;
