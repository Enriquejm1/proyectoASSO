import { DataType, DataTypes } from 'sequelize';
import db from '../db/connections';

const usuarioAsesor= db.define('Usuario',{
    correo_electronico:{
        type:DataTypes.STRING
    },
    contraseña:{
        type:DataTypes.STRING
    },
    correo_electronico_respaldo:{
        type:DataTypes.STRING
    },
    tipo:{
        type:DataTypes.STRING
    }
});

export default usuarioAsesor;