import {Router} from 'express';
import { getUsuarioAlumno, getusuariosAalumnos } from '../controllers/usuarioAlumno';

const router= Router();
//Get Usuario Alumno
router.get('/',getusuariosAalumnos);
router.get('/:id',getUsuarioAlumno);

export default router;