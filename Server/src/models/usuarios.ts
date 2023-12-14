import { DataTypes } from "sequelize";
import sequelize  from "../db/connections";


const User = sequelize.define('usuario',{
Id:{
 type:DataTypes.INTEGER,
 primaryKey:true
},
correo_electronico:{
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

export default User;