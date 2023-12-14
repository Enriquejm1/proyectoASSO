import { DataType, DataTypes } from 'sequelize';
import db from '../db/connections';

const datosAsesor= db.define('personal',{
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
    Estado:{
        type:DataTypes.STRING
    },
    Fecha_registro:{
        type:DataTypes.DATE
    },
    Direccion:{
        type:DataTypes.STRING
    },
    Id_usuario:{
        type:DataTypes.INTEGER
    }
});

export default datosAsesor;