import { DataTypes } from "sequelize";
import sequelize  from "../db/connection";
import { Subject } from "./subject";

export const TeachingModality = sequelize.define('teaching_modality', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING
    },
    role:{
        type: DataTypes.STRING,//formal, no formal, complementària
        allowNull: false
    }
}, 
{
    timestamps: false
}
)

TeachingModality.hasMany (Subject ,{
    foreignKey: 'teaching_modalityId',
    sourceKey: 'id'
})

Subject.belongsTo(TeachingModality, {
    foreignKey: 'teaching_modalityId',
    targetKey: 'id'
})

