import { DataTypes } from 'sequelize'
import db from '../db/connections';

const Persona = db.define('Persona', {
    nombre:{
        type: DataTypes.STRING
    },
    apellido_paterno:{
        type: DataTypes.STRING
    },
    apellido_materno:{
        type: DataTypes.STRING
    },
    genero:{
        type: DataTypes.STRING
    },
    telefono:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
    fecha_nacimiento:{
        type: DataTypes.STRING
    }
});

export default Persona;