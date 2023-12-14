import { Router } from 'express';
import {  getAsesor, getAsesores, postAsesor, updateAsesor } from '../controllers/datosAsesor';

const router = Router();

router.get('/', getAsesores)
router.get('/:id', getAsesor)
//router.delete('/:id', deleteAsesor)
router.post('/', postAsesor)
router.put('/:id', updateAsesor)

export default router;