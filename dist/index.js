"use strict";
/*

font
https://www.youtube.com/watch?v=INeJQ_5fwYM&t=55s

///crear package.json
npm init -y (s'ha d'haver instal·lat node.js pel comandament npm)
// instal·lam paquets de dependencies

npm install express bcrypt cors dotenv jsonwebtoken sequelize mysql2

// veure que s'han instal·lat a package.json

// instal·lar Typescript
npm install typescript --save-dev (instal·lam com una dependència de desenvolupament)

// s'executa amb npx tsc

// instal·lar nodemon (perquè el servidor escolti els canvis)
npm i nodemon --save-dev



/// inicialitzam projecte
npx tsc --init (crea el fitxer tsconfig.json)

//editam tsconfig.json
// canviam la línia outdir per "outdir":"./dist"
// envia el codi javascript generat a la carpeta dist

/// cream index.ts  i començam a programar

// primera compilació
npx tsc (genera index.js)

//primera execució
npx nodemon dist/index.js (nodemon aixeca el servidor i escolat les compilacions)

// segona compliació ara a un terminal diferent amb watch per escoltar els canvis
npx tsc --watch (escola quan guardam)

// finalment cream un script dins package.json per evitar el comandament
//package.json
   "scripts":{..
       "dev": "nodemon dist/index.js",
       "typescript": tsc --watch"
     .. }

// per tot això
1 obrim servidor de bases de dades
2 a un terminal executam
   npm run dev
3 a un segon terminal executam
   npm run typescript (per compilar en escolta)

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
// Configuram dotenv
dotenv_1.default.config();
const server = new server_1.default();
