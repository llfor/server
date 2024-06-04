import { Sequelize} from "sequelize";

import { 
    MYSQLHOST,
    MYSQLPORT,
    MYSQLDATABASE,
    MYSQLUSER,
    MYSQLPASSWORD
   } from '../config.js'



const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
    host: MYSQLHOST,
    dialect : 'mysql',
    //port: MYSQLPORT,
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

