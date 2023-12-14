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
const express_1 = __importDefault(require("express"));
const usurs_1 = __importDefault(require("../routes/usurs"));
const user_1 = __importDefault(require("../routes/user"));
const usuarios_1 = __importDefault(require("./usuarios"));
const cors_1 = __importDefault(require("cors"));
const usuarioAsesor_1 = __importDefault(require("../routes/usuarioAsesor"));
const datosMateria_1 = __importDefault(require("../routes/datosMateria"));
const usuarioAlumno_1 = __importDefault(require("../routes/usuarioAlumno"));
const datosAsesores_1 = __importDefault(require("../routes/datosAsesores"));
const datosAlumno_1 = __importDefault(require("../routes/datosAlumno"));
const datosCurso_1 = __importDefault(require("../routes/datosCurso"));
const CursoAlumno_1 = __importDefault(require("../routes/CursoAlumno"));
const MateriaAlumno_1 = __importDefault(require("../routes/MateriaAlumno"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConect();
        //console.log(process.env.PORT);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        });
    }
    routes() {
        //CRUD de tablas
        this.app.use('/api/MateriaAlumno', MateriaAlumno_1.default);
        this.app.use('/api/CursoAlumno', CursoAlumno_1.default);
        this.app.use('/api/Curso', datosCurso_1.default);
        this.app.use('/api/Materias', datosMateria_1.default);
        this.app.use('/api/Asesores', datosAsesores_1.default);
        this.app.use('/api/Alumnos', datosAlumno_1.default);
        //Usuarios de asesores y alumnos
        this.app.use('/api/UsuarioAsesor', usuarioAsesor_1.default);
        this.app.use('/api/UsuarioAlumno', usuarioAlumno_1.default);
        //Login
        this.app.use('/api/Usuarios', usurs_1.default);
        this.app.use('/api/Users', user_1.default);
    }
    midlewares() {
        //parseo  body
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield usuarios_1.default.sync();
                console.log('La conexión se ha establecido exitosamente');
            }
            catch (error) {
                console.log('No hay conexión a la base de datos', error);
            }
        });
    }
}
exports.default = Server;
