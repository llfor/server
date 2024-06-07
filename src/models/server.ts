import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import routesSubject from '../routes/subject';
import routesDepartment from '../routes/department';
import { Product } from './product';
import { User } from './user';
import { Subject } from './subject';
import { Department } from './department';

class Server{
    private app: Application;
    private port: string | undefined;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        //console.log(process.env.PORT + ' hola1');
        this.listen();
        this.dbConnect();
        this.midlewares();
        this.routes();
        
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Aplicació executant en el port '+this.port);
        })
    }
    
    routes(){
        this.app.use('/api/products',routesProduct);
        //this.app.use('/api/users',routesUser);
        this.app.use('/api/subjects', routesSubject);
        this.app.use('/api/departments', routesDepartment);
        this.app.get('/', (req: Request, res: Response)=>{
            res.json({
                msg: 'API Working - llfor'
            })

        })

    }
    midlewares(){
        // parsejam body
        this.app.use(express.json());
        //cors
        this.app.use(cors());

    }
    async dbConnect(){
        try{
            await Product.sync({alter: true});
            //await User.sync();
            await Department.sync({alter: true});
            await Subject.sync({alter: true});
            //await Subject.sync();
            //await Department.sync();

        }catch (error){
            console.log('Unable to  connect to the database: ', error);
        };
    }
}


export default Server;