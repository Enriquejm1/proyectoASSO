import { Router } from 'express';
import { deleteCA, getAlumnoCurso, getCursosAlumnos, postCursoAlumno, updateAC } from '../controllers/AlumnoCursos';

const router = Router();

router.get('/', getCursosAlumnos)
router.get('/:id', getAlumnoCurso)
router.delete('/:id', deleteCA)
router.post('/', postCursoAlumno)
router.put('/:id', updateAC)

export default router;