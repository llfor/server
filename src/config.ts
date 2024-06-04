import {config} from 'dotenv'

config()

//export const PORT = process.env.PORT || 3000
export const MYSQLUSER = process.env.MYSQLUSER || 'llforcada'
export const MYSQLPASSWORD = process.env.MYSQLPASSWORD || 'admin123'
export const MYSQLDATABASE = process.env.MYSQLDATABASE || 'companydb'
export const MYSQLPORT = process.env.MYSQLPORT || 3000
export const MYSQLHOST = process.env.MYSQLHOST || 'localhost'