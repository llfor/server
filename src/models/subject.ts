import { DataTypes } from "sequelize";
import sequelize  from "../db/connection";

export const Subject = sequelize.define('subject', {
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
    academic_year:{ //2022-23, 2023-24, 2024-25,
        type: DataTypes.STRING,
        allowNull: false
    },
    class_room:{ //aula física on es fa la matèria
        type: DataTypes.STRING
    },
    class_schedule:{ //horari de classe
        type: DataTypes.STRING
    },
    class_town:{ /// aula Ciutadella, Ferreries, Es Mercadal, Es Migjorn Gran
        type: DataTypes.STRING
    },
    contract:{ // Conselleria, CIM, AEAM
        type: DataTypes.STRING
    },
    av1_al_matriculats:{ 
        type: DataTypes.INTEGER
    },
    av1_al_no_assist_mai:{ 
        type: DataTypes.INTEGER
    },
    av1_al_assist_regular:{ 
        type: DataTypes.INTEGER
    },
    av1_al_aprovats_assist_regular:{ 
        type: DataTypes.INTEGER
    },
    av1_al_aprovats:{ 
        type: DataTypes.INTEGER
    },
    av1_al_abandonen:{ 
        type: DataTypes.INTEGER
    },
    av2_al_matriculats:{ 
        type: DataTypes.INTEGER
    },
    av2_al_no_assist_mai:{ 
        type: DataTypes.INTEGER
    },
    av2_al_assist_regular:{ 
        type: DataTypes.INTEGER
    },
    av2_al_aprovats_assist_regular:{ 
        type: DataTypes.INTEGER
    },
    av2_al_aprovats:{ 
        type: DataTypes.INTEGER
    },
    av2_al_abandonen:{ 
        type: DataTypes.INTEGER
    },
    av1_temes_programats:{
        type: DataTypes.BLOB
    },
    av1_temes_impartits:{
        type: DataTypes.BLOB
    },
    av1_clima_grup:{
        type: DataTypes.BLOB
    },
    av1_propostes_millora:{
        type: DataTypes.BLOB
    },
    av2_temes_programats:{
        type: DataTypes.BLOB
    },
    av2_temes_impartits:{
        type: DataTypes.BLOB
    },
    av2_clima_grup:{
        type: DataTypes.BLOB
    },
    av2_propostes_millora:{
        type: DataTypes.BLOB
    },
    av3_temes_programats:{
        type: DataTypes.BLOB
    },
    av3_temes_impartits:{
        type: DataTypes.BLOB
    },
    av3_clima_grup:{
        type: DataTypes.BLOB
    },
    av3_propostes_millora:{
        type: DataTypes.BLOB
    },
    mem_tract_tic_tac:{
        type: DataTypes.BLOB
    },
    mem_tract_abandonament:{
        type: DataTypes.BLOB
    },
    mem_tract_llengua:{
        type: DataTypes.BLOB
    },
    mem_recursos_didactics:{
        type: DataTypes.BLOB
    },
    mem_aval_pract_docent:{
        type: DataTypes.BLOB
    },
    rev_cap_dept:{ //revisat cap de departament
        type: DataTypes.BOOLEAN
    },
    rev_resultat:{ // tot bé, problema abandonament, problema temari,
        type: DataTypes.STRING
    },
    rev_observ_mem_curric:{
        type: DataTypes.STRING
    }
}, 
{
    timestamps: false
}
);