"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const MateriAlumno = connections_1.default.define('materiaalumno', {
    Id_alumno: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Id_materia: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    Calificacion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Promedio: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Estado: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = MateriAlumno;
