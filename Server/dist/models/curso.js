"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const datosCurso = connections_1.default.define('cursos', {
    Nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    Clave: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = datosCurso;
