import { DataType, DataTypes } from 'sequelize';
import db from '../db/connections';

const alumnocurso= db.define('cursosalumno',{
    Id_alumno:{
        type:DataTypes.INTEGER
       },
    Id_curso:{
        type:DataTypes.INTEGER
       },   
    Modalidad:{
        type:DataTypes.STRING
    },
    Pago_completo:{
        type:DataTypes.STRING
    },
    adeudo:{
        type:DataTypes.FLOAT
    },
    Estado:{
        type:DataTypes.STRING
    }
});

export default alumnocurso;