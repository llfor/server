import {Router} from 'express';
import { deleteDepartment, getDepartments, getDepartment, postDepartment, updateDepartment } from '../controlers/department';
import validateToken from './validate-token';


const router = Router();

/*
router.get('/', getDeparments);
router.get('/:id', getDepartment);
router.delete('/:id', deleteDepartment);
router.post('/', postDepartment);
router.put('/:id', updateDepartment);
*/
router.get('/',validateToken, getDepartments);
router.get('/:id', validateToken, getDepartment);
router.delete('/:id', validateToken, deleteDepartment);
router.post('/', validateToken, postDepartment);
router.put('/:id', validateToken, updateDepartment);

export default router;