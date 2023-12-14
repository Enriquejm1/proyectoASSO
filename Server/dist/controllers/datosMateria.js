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
exports.updateMateria = exports.postMateria = exports.deleteMateria = exports.getMateria = exports.getMaterias = void 0;
const materia_1 = __importDefault(require("../models/materia"));
const getMaterias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listMaterias = yield materia_1.default.findAll();
    res.json({
        listMaterias,
        msg: 'get Materias'
    });
});
exports.getMaterias = getMaterias;
const getMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const materia = yield materia_1.default.findByPk(id);
    if (materia) {
        res.json(materia);
    }
    else {
        res.status(404).json({
            msg: 'No existe los datos personales del alumno con ese id'
        });
    }
});
exports.getMateria = getMateria;
const deleteMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const materia = yield materia_1.default.findByPk(id);
    if (!materia) {
        res.status(404).json({
            msg: "No exite esta materia correspondiente"
        });
    }
    else {
        yield materia.destroy();
        res.json({
            msg: 'Los datos de la materia fueron eliminados correctamente'
        });
    }
});
exports.deleteMateria = deleteMateria;
const postMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield materia_1.default.create(body);
        res.json({
            msg: "La materia fue agregada con exito"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ocurrio un error, comuniquese con soporte"
        });
    }
});
exports.postMateria = postMateria;
const updateMateria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const materia = yield materia_1.default.findByPk(id);
        if (materia) {
            yield materia.update(body);
            res.json({
                msg: 'Los datos de la materia fueron actualizados exitosamente'
            });
        }
        else {
            res.status(404).json({
                msg: 'No existe la materia'
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
exports.updateMateria = updateMateria;
