"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const subject_1 = require("./subject");
exports.Department = connection_1.default.define('department', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.Department.hasMany(subject_1.Subject, {
    foreignKey: 'departmentId',
    sourceKey: 'id'
});
subject_1.Subject.belongsTo(exports.Department, {
    foreignKey: 'departmentId',
    targetKey: 'id'
});
