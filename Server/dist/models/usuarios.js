"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const User = connections_1.default.define('usuario', {
    Id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    correo_electronico: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    contraseña: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Correo_electronico_respaldo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Tipo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = User;
