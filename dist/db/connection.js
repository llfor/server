"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_js_1 = require("../config.js");
const sequelize = new sequelize_1.Sequelize(config_js_1.MYSQLDATABASE, config_js_1.MYSQLUSER, config_js_1.MYSQLPASSWORD, {
    host: config_js_1.MYSQLHOST,
    dialect: 'mysql',
    port: config_js_1.MYSQLPORT,
});
/*
const sequelize = new Sequelize('rrhh', 'llforcada', 'admin123', {
    host: 'localhost',
    dialect : 'mysql',
});
*/
exports.default = sequelize;
