import {Router} from 'express';
import { deleteTeachingModality, getTeachingModalities, getTeachingModality, postTeachingModality, updateTeachingModality } from '../controlers/teaching_modality';
//import validateToken from './validate-token';
import validateFirebaseToken from './validate-firebase-token';


const router = Router();


router.get('/', validateFirebaseToken, getTeachingModalities);
router.get('/:id', validateFirebaseToken, getTeachingModality);
router.delete('/:id', validateFirebaseToken, deleteTeachingModality);
router.post('/', validateFirebaseToken, postTeachingModality);
router.put('/:id', validateFirebaseToken, updateTeachingModality);


export default router;