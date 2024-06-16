import { DataTypes } from "sequelize";
import sequelize  from "../db/connection";
import { Subject } from "./subject";

export const User = sequelize.define('user', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    teacher_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING
    }
},
{
    timestamps: false
}
)

User.hasMany (Subject ,{
    foreignKey: 'userId',
    sourceKey: 'id'
})

Subject.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id'
})

