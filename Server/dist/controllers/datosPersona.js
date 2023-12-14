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
exports.updateDatosPersona = exports.postDatosPersona = exports.deleteDatosPersona = exports.getDatosPersona = exports.getDatosPersonas = void 0;
const datosPersonaM_1 = __importDefault(require("../models/datosPersonaM"));
const getDatosPersonas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaPersonas = yield datosPersonaM_1.default.findAll();
    res.json(listaPersonas);
});
exports.getDatosPersonas = getDatosPersonas;
const getDatosPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const persona = yield datosPersonaM_1.default.findByPk(id);
    if (persona) {
        res.json(persona);
    }
    else {
        res.status(404).json({
            msg: `No existe una persona con el id ${id}`
        });
    }
});
exports.getDatosPersona = getDatosPersona;
const deleteDatosPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const persona = yield datosPersonaM_1.default.findByPk(id);
    if (!persona) {
        res.status(404).json({
            msg: `No existe una persona con el id ${id}`
        });
    }
    else {
        yield persona.destroy();
        res.json({
            msg: 'La persona fue eliminada con exito!'
        });
    }
});
exports.deleteDatosPersona = deleteDatosPersona;
const postDatosPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield datosPersonaM_1.default.create(body);
        res.json({
            msg: 'La persona fue agregada con exito!'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps ocurrio un error, comuniquese con soporte'
        });
    }
});
exports.postDatosPersona = postDatosPersona;
const updateDatosPersona = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const persona = yield datosPersonaM_1.default.findByPk(id);
        if (persona) {
            yield persona.update(body);
            res.json({
                msg: 'La persona fue actualizada con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una persona con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Upps ocurrio un error, comuniquese con soporte'
        });
    }
});
exports.updateDatosPersona = updateDatosPersona;
