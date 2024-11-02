import express, { Application, Request, Response } from 'express';
import cors from 'cors';
//import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import routesSubject from '../routes/subject';
import routesDepartment from '../routes/department';
import routesTeachingModalities from '../routes/teaching_modality';
//import { Product } from './product';
import { User } from './user';
import { Subject } from './subject';
import { Department } from './department';
import { TeachingModality } from './teaching_modality';

class Server {
    private app: Application;
    private port: string | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.dbConnect();
        this.midlewares();
        this.routes();

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicació executant en el port ' + this.port);
        })
    }
    async dbConnect() {
        try {
            //await Product.sync({ alter: true });
            await User.sync({ alter: false });
            await Department.sync({ alter: false });
            await TeachingModality.sync({ alter: false });
            await Subject.sync({ alter: false });


            // sense alter true no es força l'estructura de la taula
            //await Subject.sync();
            //await Department.sync();

        } catch (error) {
            console.log('Unable to  connect to the database: ', error);
        };
    }
    midlewares() {
        // parsejam body
        this.app.use(express.json());
        //cors
        this.app.use(cors(
            {
                origin: 'http://localhost:4200', // Domini que vols permetre
                methods: 'GET,POST,PUT,DELETE,OPTIONS',
                allowedHeaders: 'Content-Type,Authorization',
                credentials: true
            }           
        ));
    }
    routes() {
        //this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
        this.app.use('/api/subjects', routesSubject);
        this.app.use('/api/departments', routesDepartment);
        this.app.use('/api/teaching_modalities', routesTeachingModalities);
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working - llfor'
            })

        })

    }
}


export default Server;