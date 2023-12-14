"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datosAsesor_1 = require("../controllers/datosAsesor");
const router = (0, express_1.Router)();
router.get('/', datosAsesor_1.getAsesores);
router.get('/:id', datosAsesor_1.getAsesor);
//router.delete('/:id', deleteAsesor)
router.post('/', datosAsesor_1.postAsesor);
router.put('/:id', datosAsesor_1.updateAsesor);
exports.default = router;
