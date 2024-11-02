"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Subject = connection_1.default.define('subject', {
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
    academic_year: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    class_room: {
        type: sequelize_1.DataTypes.STRING
    },
    class_schedule: {
        type: sequelize_1.DataTypes.STRING
    },
    class_town: {
        type: sequelize_1.DataTypes.STRING
    },
    contract: {
        type: sequelize_1.DataTypes.STRING
    },
    av1_al_matriculats: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av1_al_no_assist_mai: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av1_al_assist_regular: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av1_al_aprovats_assist_regular: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av1_al_aprovats: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av1_al_abandonen: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av2_al_matriculats: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av2_al_no_assist_mai: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av2_al_assist_regular: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av2_al_aprovats_assist_regular: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av2_al_aprovats: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av2_al_abandonen: {
        type: sequelize_1.DataTypes.INTEGER
    },
    av1_temes_programats: {
        type: sequelize_1.DataTypes.TEXT
    },
    av1_temes_impartits: {
        type: sequelize_1.DataTypes.TEXT
    },
    av1_clima_grup: {
        type: sequelize_1.DataTypes.TEXT
    },
    av1_propostes_millora: {
        type: sequelize_1.DataTypes.TEXT
    },
    av2_temes_programats: {
        type: sequelize_1.DataTypes.TEXT
    },
    av2_temes_impartits: {
        type: sequelize_1.DataTypes.TEXT
    },
    av2_clima_grup: {
        type: sequelize_1.DataTypes.TEXT
    },
    av2_propostes_millora: {
        type: sequelize_1.DataTypes.TEXT
    },
    mem_tract_tic_tac: {
        type: sequelize_1.DataTypes.TEXT
    },
    mem_tract_abandonament: {
        type: sequelize_1.DataTypes.TEXT
    },
    mem_tract_llengua: {
        type: sequelize_1.DataTypes.TEXT
    },
    mem_recursos_didactics: {
        type: sequelize_1.DataTypes.TEXT
    },
    mem_aval_pract_docent: {
        type: sequelize_1.DataTypes.TEXT
    },
    rev_cap_dept: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    rev_resultat: {
        type: sequelize_1.DataTypes.TEXT
    },
    rev_observ_mem_curric: {
        type: sequelize_1.DataTypes.TEXT
    }
}, {
    timestamps: false
});
