"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachingModality = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const subject_1 = require("./subject");
exports.TeachingModality = connection_1.default.define('teaching_modality', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    role: {
        type: sequelize_1.DataTypes.STRING, //formal, no formal, complementària
        allowNull: false
    }
}, {
    timestamps: false
});
exports.TeachingModality.hasMany(subject_1.Subject, {
    foreignKey: 'teaching_modalityId',
    sourceKey: 'id'
});
subject_1.Subject.belongsTo(exports.TeachingModality, {
    foreignKey: 'teaching_modalityId',
    targetKey: 'id'
});
