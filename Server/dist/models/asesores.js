"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const datosAsesor = connections_1.default.define('personal', {
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    Apellido_Paterno: {
        type: sequelize_1.DataTypes.STRING
    },
    Apellido_Materno: {
        type: sequelize_1.DataTypes.STRING
    },
    Telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    Genero: {
        type: sequelize_1.DataTypes.STRING
    },
    Estado: {
        type: sequelize_1.DataTypes.STRING
    },
    Fecha_registro: {
        type: sequelize_1.DataTypes.DATE
    },
    Direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    Id_usuario: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = datosAsesor;
