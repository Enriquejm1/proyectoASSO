import { DataType, DataTypes } from 'sequelize';
import db from '../db/connections';

const datosCurso= db.define('cursos',{
    Nombre:{
        type:DataTypes.STRING
    },
    Clave:{
        type:DataTypes.STRING
    }
});

export default datosCurso;