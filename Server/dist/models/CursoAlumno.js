"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const alumnocurso = connections_1.default.define('cursosalumno', {
    Id_alumno: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Id_curso: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Modalidad: {
        type: sequelize_1.DataTypes.STRING
    },
    Pago_completo: {
        type: sequelize_1.DataTypes.STRING
    },
    adeudo: {
        type: sequelize_1.DataTypes.FLOAT
    },
    Estado: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = alumnocurso;
