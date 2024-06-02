import { DataTypes } from "sequelize";
import sequelize  from "../db/connection";

export const Subject = sequelize.define('subject', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }
}, 
//{
//    createdAt: false,
//    updatedAt: false
//}
);