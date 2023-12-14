import { DataType, DataTypes } from 'sequelize';
import db from '../db/connections';

const personalesAsesor= db.define('personal',{
    Id_persona:{
        type:DataTypes.INTEGER
    },
    Id_usuario:{
        type:DataTypes.INTEGER
    },
    RFC:{
        type:DataTypes.STRING
    },
    codigo_postal:{
        type:DataTypes.STRING
    },
    colonia:{
        type:DataTypes.STRING
    },
    direccion:{
        type:DataTypes.STRING
    }
});

export default personalesAsesor;