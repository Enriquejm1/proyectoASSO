"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const usuarioAsesor = connections_1.default.define('Usuario', {
    correo_electronico: {
        type: sequelize_1.DataTypes.STRING
    },
    contraseña: {
        type: sequelize_1.DataTypes.STRING
    },
    correo_electronico_respaldo: {
        type: sequelize_1.DataTypes.STRING
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = usuarioAsesor;
