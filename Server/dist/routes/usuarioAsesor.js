"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioAsesor_1 = require("../controllers/usuarioAsesor");
const router = (0, express_1.Router)();
//Get usuario asesor
router.get('/', usuarioAsesor_1.getusuariosAsesor);
router.get('/:id', usuarioAsesor_1.getUsuarioAsesor);
//CRUD usuario
router.delete('/:id', usuarioAsesor_1.deleteUsuario);
router.post('/', usuarioAsesor_1.postUsuario);
router.put('/:id', usuarioAsesor_1.updateUsuario);
exports.default = router;
