import { DataType, DataTypes } from 'sequelize';
import db from '../db/connections';

const datosMateria= db.define('materias',{
    Nombre:{
        type:DataTypes.STRING
    }
});

export default datosMateria;