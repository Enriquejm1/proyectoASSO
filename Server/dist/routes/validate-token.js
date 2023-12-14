"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    console.log("Hola mundoi:" + headerToken);
    if (headerToken != undefined) {
        //Tienen token
        try {
            const BearerToken = headerToken.slice(7);
            console.log(BearerToken);
            jsonwebtoken_1.default.verify(BearerToken, process.env.SECRET_KEY || 'PEPITO124');
        }
        catch (error) {
            res.status(401).json({
                msg: 'Token no valido'
            });
        }
        next();
    }
    else {
        res.status(401).json({
            msg: 'Acceso Denegado'
        });
    }
};
exports.default = validateToken;
