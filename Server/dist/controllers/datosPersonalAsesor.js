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
exports.updatePersonalesAsesor = exports.postPersonalesAsesor = exports.deleteUsuarioAsesor = exports.getPersonalesAsesor = exports.getAsesorDatospersonales = void 0;
const datosPersonalesAsesor_1 = __importDefault(require("../models/datosPersonalesAsesor"));
const getAsesorDatospersonales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPersonalesAsesores = yield datosPersonalesAsesor_1.default.findAll();
    res.json({
        listPersonalesAsesores,
        msg: 'get Personales Asesores'
    });
});
exports.getAsesorDatospersonales = getAsesorDatospersonales;
const getPersonalesAsesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asesor = yield datosPersonalesAsesor_1.default.findByPk(id);
    if (asesor) {
        res.json(asesor);
    }
    else {
        res.status(404).json({
            msg: 'No existe los datos personales del usuario con ese id'
        });
    }
});
exports.getPersonalesAsesor = getPersonalesAsesor;
const deleteUsuarioAsesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const asesor = yield datosPersonalesAsesor_1.default.findByPk(id);
    if (!asesor) {
        res.status(404).json({
            msg: "No exiten los datos personales del usuario correspondiente"
        });
    }
    else {
        yield asesor.destroy();
        res.json({
            msg: 'El usuario del asesor fue eliminado correctamente'
        });
    }
});
exports.deleteUsuarioAsesor = deleteUsuarioAsesor;
const postPersonalesAsesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield datosPersonalesAsesor_1.default.create(body);
        res.json({
            msg: "Los datos personales del asesor fueron registrados con exito"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ocurrio un error, comuniquese con soporte"
        });
    }
});
exports.postPersonalesAsesor = postPersonalesAsesor;
const updatePersonalesAsesor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const asesor = yield datosPersonalesAsesor_1.default.findByPk(id);
        if (asesor) {
            yield asesor.update(body);
            res.json({
                msg: 'Los datos personales del asesor fueron actualizado exitosamente'
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
});
exports.updatePersonalesAsesor = updatePersonalesAsesor;
