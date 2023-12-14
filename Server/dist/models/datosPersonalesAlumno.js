"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const datosPersonalesAlumno = connections_1.default.define('Alumno', {
    Id_persona: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Id_usuario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Institucion: {
        type: sequelize_1.DataTypes.STRING
    },
    Carrera: {
        type: sequelize_1.DataTypes.STRING
    },
    Fecha_examen: {
        type: sequelize_1.DataTypes.DATE
    },
    Comentario: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = datosPersonalesAlumno;
