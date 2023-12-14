import {Sequelize} from "sequelize";
//import { DataTypes } from "sequelize";
//import  express  from "express";
//import User from "../models/usuarios";

const sequelize = new Sequelize('asesoriaacademicas','root','',{
    host:'localhost',
    dialect:'mysql'
});


/*const User = sequelize.define('usuario',{
    Id_Usuario:{
     type:DataTypes.INTEGER,
     primaryKey:true
    },
    Correo_electronico:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    contraseña:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Correo_electronico_respaldo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Tipo:{
        type:DataTypes.STRING,
        allowNull:false
    }
    }
    )


User.findAll({attributes:['Correo_electronico']})
.then(posgres=>{
    console.log(posgres);
})
.catch(error=>{
    console.log(error);
})*/

sequelize.authenticate()
.then(()=>{
    console.log('Conexion a la base de datos exitosa')
})
.catch(erro=>{
    console.log("Error en la conexion");
})


export default sequelize;