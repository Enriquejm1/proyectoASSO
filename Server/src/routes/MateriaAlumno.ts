import { Router } from 'express';
import { deleteMA, getAlumnoMateria, getMateriaAlumnos, postMateriaAlumno, updateAM } from '../controllers/AlumnoMateria';

const router = Router();

router.get('/', getMateriaAlumnos)
router.get('/:id', getAlumnoMateria)
router.delete('/:id', deleteMA)
router.post('/', postMateriaAlumno)
router.put('/:id', updateAM)

export default router;