import {Router} from 'express';
import { getSubject, deleteSubject, postSubject, updateSubject, getSubjectsfiltered } from '../controlers/subject';

//import validateToken from './validate-token';
import validateFirebaseToken from './validate-firebase-token';

const router = Router();

/*
router.get('/', getSubjectsfiltered);
router.get('/:id', getSubject);
router.delete('/:id', deleteSubject);
router.post('/', postSubject);
router.put('/:id', updateSubject);
*/

router.get('/',validateFirebaseToken, getSubjectsfiltered);
router.get('/:id', validateFirebaseToken, getSubject);
router.delete('/:id', validateFirebaseToken, deleteSubject);
router.post('/', validateFirebaseToken, postSubject);
router.put('/:id', validateFirebaseToken, updateSubject);



export default router;