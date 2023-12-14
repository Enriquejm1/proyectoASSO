import {Router} from 'express';
import { deletePersonalesAlumno, getAlumnoDatospersonales, getPersonalesAlumnos, postPersonalesAlumno, updatePersonalesAlumno } from '../controllers/datosPersonalesAlumno';

const router= Router();
router.get('/',getAlumnoDatospersonales);
router.get('/:id',getPersonalesAlumnos);
router.delete('/:id',deletePersonalesAlumno);
router.post('/',postPersonalesAlumno);
router.put('/:id',updatePersonalesAlumno);

export default router;