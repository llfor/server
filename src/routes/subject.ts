import {Router} from 'express';
import { getSubjects, getSubject, deleteSubject, postSubject, updateSubject, getSubjectsfiltered } from '../controlers/subject';

import validateToken from './validate-token';


const router = Router();

/*
router.get('/', getSubjectsfiltered);
router.get('/:id', getSubject);
router.delete('/:id', deleteSubject);
router.post('/', postSubject);
router.put('/:id', updateSubject);
*/

router.get('/',validateToken, getSubjectsfiltered);
router.get('/:id', validateToken, getSubject);
router.delete('/:id', validateToken, deleteSubject);
router.post('/', validateToken, postSubject);
router.put('/:id', validateToken, updateSubject);



export default router;