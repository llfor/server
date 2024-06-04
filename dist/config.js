"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQLHOST = exports.MYSQLPORT = exports.MYSQLDATABASE = exports.MYSQLPASSWORD = exports.MYSQLUSER = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//export const PORT = process.env.PORT || 3000
exports.MYSQLUSER = process.env.MYSQLUSER || 'llforcada';
exports.MYSQLPASSWORD = process.env.MYSQLPASSWORD || 'admin123';
exports.MYSQLDATABASE = process.env.MYSQLDATABASE || 'companydb';
exports.MYSQLPORT = process.env.MYSQLPORT || 3000;
exports.MYSQLHOST = process.env.MYSQLHOST || 'localhost';
