"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const usuarios_1 = __importDefault(require("../models/usuarios"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.json({
        msg: "login user",
        body
    });
    /*
        const user= await usuarios.findOne({where:{correo_electronico:correo}})
    
        if(user){
           return res.status(400).json({
                msg:'Ya existe el usuario'
            })
        }
    
        const haspass= await  bcrypt.hash(contra,10);
        //console.log(haspass);
        
        try {
            await usuarios.create({
                correo_electornico:correo,
                contra:contra
        
            })
            
            res.json({
      
                msg:'New user'
            })
        } catch (error) {
            res.status(400).json({
                msg:'Ocurrio un error',
                error
            })
        }
    */
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, contra, tipo } = req.body;
    console.log(correo);
    console.log(contra);
    console.log(tipo);
    //Exite el usuario en la base de datos.
    const user = yield usuarios_1.default.findOne({ where: { correo_electronico: correo } });
    if (!user) {
        return res.status(400).json({
            msg: 'El correo electronico no esta registrado'
        });
    }
    if (contra != user.contraseña) {
        return res.status(400).json({
            msg: 'Contraseña Incorrecta'
        });
    }
    if (tipo != user.Tipo) {
        return res.status(400).json({
            msg: 'Este usuario no pertenece a esta sección'
        });
    }
    /*
    const pass =await bcrypt.compare(contra,user.contraseña)
    
    if(!pass){
        return res.status(400).json({
            msg:'Contraseña Incorrecta'
        })
    }
    */
    //Generar Token
    const token = jsonwebtoken_1.default.sign({
        correo_electronico: correo
    }, process.env.SECRET_KEY || 'PEPITO124');
    res.json(token);
});
exports.loginUser = loginUser;
