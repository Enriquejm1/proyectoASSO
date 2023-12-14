"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const personalesAsesor = connections_1.default.define('personal', {
    Id_persona: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Id_usuario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    RFC: {
        type: sequelize_1.DataTypes.STRING
    },
    codigo_postal: {
        type: sequelize_1.DataTypes.STRING
    },
    colonia: {
        type: sequelize_1.DataTypes.STRING
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = personalesAsesor;
