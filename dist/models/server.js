"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_1 = __importDefault(require("../routes/product"));
const product_2 = require("./product");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        //console.log(process.env.PORT + ' hola1');
        this.listen();
        this.dbConnect();
        this.midlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicació executant en el port ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/products', product_1.default);
        //this.app.use('/api/users',routesUser);
        //this.app.use('/api/subjects', routesSubject);
        //this.app.use('/api/departments', routesDepartment);
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working - llfor'
            });
        });
    }
    midlewares() {
        // parsejam body
        this.app.use(express_1.default.json());
        //cors
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_2.Product.sync({ alter: true });
                //await User.sync();
                //await Subject.sync({alter: true});
                //await Department.sync({alter: true});
                //await Subject.sync();
                //await Department.sync();
            }
            catch (error) {
                console.log('Unable to  connect to the database: ', error);
            }
            ;
        });
    }
}
//export const DB_USER = process.env.DB_USER;
//console.log(process.env.PORT + ' hola');
exports.default = Server;
