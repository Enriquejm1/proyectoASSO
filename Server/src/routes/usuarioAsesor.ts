import {Router} from 'express';
import {  deleteUsuario, getUsuarioAsesor, getusuariosAsesor, postUsuario, updateUsuario } from '../controllers/usuarioAsesor';

const router= Router();

//Get usuario asesor
router.get('/',getusuariosAsesor);
router.get('/:id',getUsuarioAsesor);
//CRUD usuario
router.delete('/:id',deleteUsuario);
router.post('/',postUsuario);
router.put('/:id',updateUsuario);


export default router;
