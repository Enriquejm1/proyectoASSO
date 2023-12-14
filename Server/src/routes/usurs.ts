import { Router } from "express";
import {getUsuarios} from '../controllers/usuario';
import validateToken from "./validate-token";
const router = Router();

router.get('/',validateToken ,getUsuarios)

export default router;