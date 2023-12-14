
import { DataType, DataTypes } from 'sequelize';
import db from '../db/connections';

const datosAlumno= db.define('alumno',{
    Id:{
        type:DataTypes.INTEGER,
        primaryKey:true
       },
    Nombre:{
        type:DataTypes.STRING
    },
    Apellido_Paterno:{
        type:DataTypes.STRING
    },
    Apellido_Materno:{
        type:DataTypes.STRING
    },
    Telefono:{
        type:DataTypes.STRING
    },
    Genero:{
        type:DataTypes.STRING
    },
    Fecha_registro:{
        type:DataTypes.DATE
    },
    institucion:{
        type:DataTypes.STRING
    },
    Carrera:{
        type:DataTypes.STRING
    },
    Fecha_Examen:{
        type:DataTypes.DATE
    },
    Estado:{
        type:DataTypes.STRING
    },
    Comentario:{
        type:DataTypes.STRING
    },
    Id_usuario_alumno:{
        type:DataTypes.INTEGER
    }
});

export default datosAlumno;