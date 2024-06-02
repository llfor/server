import { Sequelize} from "sequelize";

import { 
    DB_HOST,
    //DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
   } from '../config.js'

/*const DB_USER = process.env.DB_USER || 'llforcada';
const DB_PASSWORD = process.env.DB_PASSWORD || 'admin123';
const DB_DATABASE = process.env.DB_DATABASE || 'rrhh';
const DB_PORT = process.env.DB_PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';
console.log(process.env.DB_USER);
*/


const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect : 'mysql',
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
export default sequelize;

