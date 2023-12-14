import express,{Application} from 'express';
import routerUsuario from '../routes/usurs';
import routerDatosPersona from '../routes/datosPersonaR';
import routerUser from '../routes/user';
import sequelize from '../db/connections';
import usuarios from './usuarios';
import cors from 'cors';
import routerUsuAsesor from '../routes/usuarioAsesor';
import routerperonalesAsesor from '../routes/datosPersonalesAsesor';
import routerpersonalAlumno from '../routes/datosPersonalesAlumno';
import routermaterias from '../routes/datosMateria';
import routerUsuAlumno from '../routes/usuarioAlumno';
import routerAsesor from '../routes/datosAsesores';
import routerAlumno from '../routes/datosAlumno';
import routerCurso from '../routes/datosCurso';
import routerCursoAlumno from '../routes/CursoAlumno';
import routerMateriaAlumno from '../routes/MateriaAlumno';

class Server {
    private app:Application;
    private port:string|undefined;
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConect();
        //console.log(process.env.PORT);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Aplicacion corriendo en el puerto '+this.port);
        });
    }

    routes(){
        
        //CRUD de tablas
        
        this.app.use('/api/MateriaAlumno',routerMateriaAlumno);

        this.app.use('/api/CursoAlumno',routerCursoAlumno);

        this.app.use('/api/Curso',routerCurso);

        this.app.use('/api/Materias',routermaterias);

        this.app.use('/api/Asesores',routerAsesor);

        this.app.use('/api/Alumnos',routerAlumno);
        
        //Usuarios de asesores y alumnos
        this.app.use('/api/UsuarioAsesor',routerUsuAsesor);
        this.app.use('/api/UsuarioAlumno',routerUsuAlumno);

        //Login
        this.app.use('/api/Usuarios',routerUsuario);
        this.app.use('/api/Users',routerUser);

    }

    midlewares(){
        //parseo  body
        this.app.use(express.json())
        this.app.use(cors());
    }

    async dbConect(){
        try{
            await usuarios.sync();
            console.log('La conexión se ha establecido exitosamente');
        }catch(error){
            console.log('No hay conexión a la base de datos',error);
        }
    }
}

export default Server;