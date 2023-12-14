import {Router} from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/datosCurso';

const router= Router();
router.get('/',getCursos);
router.get('/:id',getCurso);
router.delete('/:id',deleteCurso);
router.post('/',postCurso);
router.put('/:id',updateCurso);

export default router;