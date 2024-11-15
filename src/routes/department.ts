import {Router} from 'express';
import { deleteDepartment, getDepartments, getDepartment, postDepartment, updateDepartment } from '../controlers/department';
//import validateToken from './validate-token';
import validateFirebaseToken from './validate-firebase-token';


const router = Router();

/*
router.get('/', getDeparments);
router.get('/:id', getDepartment);
router.delete('/:id', deleteDepartment);
router.post('/', postDepartment);
router.put('/:id', updateDepartment);
*/
router.get('/',validateFirebaseToken, getDepartments);
router.get('/:id', validateFirebaseToken, getDepartment);
router.delete('/:id', validateFirebaseToken, deleteDepartment);
router.post('/', validateFirebaseToken, postDepartment);
router.put('/:id', validateFirebaseToken, updateDepartment);

export default router;