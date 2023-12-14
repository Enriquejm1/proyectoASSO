import { Router } from 'express';
import { deleteDatosPersona, getDatosPersona, getDatosPersonas, postDatosPersona, updateDatosPersona } from '../controllers/datosPersona';

const router = Router();

router.get('/', getDatosPersonas)
router.get('/:id', getDatosPersona)
router.delete('/:id', deleteDatosPersona)
router.post('/', postDatosPersona)
router.put('/:id', updateDatosPersona)


export default router;