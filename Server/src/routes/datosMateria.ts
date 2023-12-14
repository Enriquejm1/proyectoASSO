import {Router} from 'express';
import { deleteMateria, getMateria, getMaterias, postMateria, updateMateria } from '../controllers/datosMateria';

const router= Router();
router.get('/',getMaterias);
router.get('/:id',getMateria);
router.delete('/:id',deleteMateria);
router.post('/',postMateria);
router.put('/:id',updateMateria);

export default router;