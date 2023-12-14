"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const datosMateria = connections_1.default.define('materias', {
    Nombre: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = datosMateria;
