import {Router} from 'express';
import { getSubjects, getSubject, deleteSubject, postSubject, updateSubject } from '../controlers/subject';
import validateToken from './validate-token';


const router = Router();

//router.get('/',validateToken, getSubjects);
router.get('/', getSubjects);
//router.get('/depts', getSubjectsDeparments);
//router.get('/:id', validateToken, getSubject);
router.get('/:id', getSubject);
//router.delete('/:id', validateToken, deleteSubject);
router.delete('/:id', deleteSubject);
//router.post('/', validateToken, postSubject);
router.post('/', postSubject);
//router.put('/:id', validateToken, updateSubject);
router.put('/:id', updateSubject);


export default router;