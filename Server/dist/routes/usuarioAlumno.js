"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioAlumno_1 = require("../controllers/usuarioAlumno");
const router = (0, express_1.Router)();
//Get Usuario Alumno
router.get('/', usuarioAlumno_1.getusuariosAalumnos);
router.get('/:id', usuarioAlumno_1.getUsuarioAlumno);
exports.default = router;
