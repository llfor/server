"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_HOST = exports.DB_PORT = exports.DB_DATABASE = exports.DB_PASSWORD = exports.DB_USER = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//export const PORT = process.env.PORT || 3000
exports.DB_USER = process.env.DB_USER || 'llrcada';
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'admin123';
exports.DB_DATABASE = process.env.DB_DATABASE || 'companydb';
exports.DB_PORT = process.env.DB_PORT || 3000;
exports.DB_HOST = process.env.DB_HOST || 'localhost';
