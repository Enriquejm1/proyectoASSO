import { DataType, DataTypes } from 'sequelize';
import db from '../db/connections';

const datosPersonalesAlumno= db.define('Alumno',{
    Id_persona:{
        type:DataTypes.INTEGER
    },
    Id_usuario:{
        type:DataTypes.INTEGER
    },
    Institucion:{
        type:DataTypes.STRING
    },
    Carrera:{
        type:DataTypes.STRING
    },
    Fecha_examen:{
        type:DataTypes.DATE
    },
    Comentario:{
        type:DataTypes.STRING
    }
});

export default datosPersonalesAlumno;