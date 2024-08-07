import { DataTypes } from "sequelize";
import sequelize  from "../db/connection";
import { Subject } from "./subject";

export const Department = sequelize.define('department', {
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
    }
}, 
{
    timestamps: false
}
)

Department.hasMany (Subject ,{
    foreignKey: 'departmentId',
    sourceKey: 'id'
})

Subject.belongsTo(Department, {
    foreignKey: 'departmentId',
    targetKey: 'id'
})

