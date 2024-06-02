"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_js_1 = require("../config.js");
/*const DB_USER = process.env.DB_USER || 'llforcada';
const DB_PASSWORD = process.env.DB_PASSWORD || 'admin123';
const DB_DATABASE = process.env.DB_DATABASE || 'rrhh';
const DB_PORT = process.env.DB_PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';
console.log(process.env.DB_USER);
*/
const sequelize = new sequelize_1.Sequelize(config_js_1.DB_DATABASE, config_js_1.DB_USER, config_js_1.DB_PASSWORD, {
    host: config_js_1.DB_HOST,
    dialect: 'mysql',
});
/*
const sequelize = new Sequelize('rrhh', 'llforcada', 'admin123', {
    host: 'localhost',
    dialect : 'mysql',
});
*/
/*
const sequelize = new Sequelize('u222026052_pescola', 'u222026052_pescola', 'CS6$t8cThX0;', {
    host: 'llfor-develop.com',
    dialect : 'mysql',
});
*/
exports.default = sequelize;
