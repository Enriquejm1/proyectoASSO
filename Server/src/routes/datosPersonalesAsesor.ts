import {Router} from 'express';
import { deleteUsuarioAsesor, getAsesorDatospersonales, postPersonalesAsesor,
     updatePersonalesAsesor } from '../controllers/datosPersonalAsesor';


const router= Router();
router.get('/',getAsesorDatospersonales);
router.get('/:id',getAsesorDatospersonales);
router.delete('/:id',deleteUsuarioAsesor);
router.post('/',postPersonalesAsesor);
router.put('/:id',updatePersonalesAsesor);

export default router;