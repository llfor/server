import {Router} from 'express';
import { deleteTeachingModality, getTeachingModalities, getTeachingModality, postTeachingModality, updateTeachingModality } from '../controlers/teaching_modality';
//import validateToken from './validate-token';


const router = Router();


router.get('/', getTeachingModalities);
router.get('/:id', getTeachingModality);
router.delete('/:id', deleteTeachingModality);
router.post('/', postTeachingModality);
router.put('/:id', updateTeachingModality);
/*
router.get('/',validateToken, getDepartments);
router.get('/:id', validateToken, getDepartment);
router.delete('/:id', validateToken, deleteDepartment);
router.post('/', validateToken, postDepartment);
router.put('/:id', validateToken, updateDepartment);
*/

export default router;