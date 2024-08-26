import {Router} from 'express';
import { getProducts } from '../controlers/product';
//import validateToken from './validate-token';


const router = Router();

//router.get('/',validateToken, getProducts);
router.get('/', getProducts);

export default router;