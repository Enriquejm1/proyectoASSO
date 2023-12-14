"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datosAlumno_1 = require("../controllers/datosAlumno");
const router = (0, express_1.Router)();
router.get('/', datosAlumno_1.getAlumnos);
router.get('/:id', datosAlumno_1.getAlumno);
//router.delete('/:id', deleteAsesor)
router.post('/', datosAlumno_1.postAlumno);
router.put('/:id', datosAlumno_1.updateAlumno);
exports.default = router;
