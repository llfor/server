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
    port: MYSQLPORT as number,

});


/*
const sequelize = new Sequelize('rrhh', 'llforcada', 'admin123', {
    host: 'localhost',
    dialect : 'mysql',
});
*/

export default sequelize;

