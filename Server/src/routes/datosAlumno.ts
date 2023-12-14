import { Router } from 'express';
import { getAlumno, getAlumnos, postAlumno, updateAlumno } from '../controllers/datosAlumno';

const router = Router();

router.get('/', getAlumnos)
router.get('/:id', getAlumno)
//router.delete('/:id', deleteAsesor)
router.post('/', postAlumno)
router.put('/:id', updateAlumno)

export default router;