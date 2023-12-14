"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const Persona = connections_1.default.define('Persona', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_paterno: {
        type: sequelize_1.DataTypes.STRING
    },
    apellido_materno: {
        type: sequelize_1.DataTypes.STRING
    },
    genero: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Persona;
