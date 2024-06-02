import {Router} from 'express';
import { getDeparments, getDepartment } from '../controlers/department';
//import validateToken from './validate-token';


const router = Router();

//router.get('/',validateToken, getDepartments);
router.get('/', getDeparments);
//router.get('/:id', validateToken, getDepartment);
router.get('/:id', getDepartment);
//router.delete('/:id', validateToken, deleteSubject);
//router.post('/', validateToken, postSubject);
//router.put('/:id', validateToken, updateSubject);


export default router;