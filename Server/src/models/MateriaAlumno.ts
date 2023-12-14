import { DataType, DataTypes } from 'sequelize';
import db from '../db/connections';

const MateriAlumno= db.define('materiaalumno',{
    Id_alumno:{
        type:DataTypes.INTEGER
    },
    Id_materia:{
        type:DataTypes.INTEGER
    },
    Fecha:{
        type:DataTypes.DATE
    },
    Calificacion:{
        type:DataTypes.INTEGER
    },
    Promedio:{
        type:DataTypes.INTEGER
    },
    Estado:{
        type:DataTypes.STRING
    }
});

export default MateriAlumno;