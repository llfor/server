import {Router} from 'express';
import { deleteTeachingModality, getTeachingModalities, getTeachingModality, postTeachingModality, updateTeachingModality } from '../controlers/teaching_modality';
import validateToken from './validate-token';


const router = Router();


router.get('/', validateToken, getTeachingModalities);
router.get('/:id', validateToken, getTeachingModality);
router.delete('/:id',validateToken, deleteTeachingModality);
router.post('/', validateToken, postTeachingModality);
router.put('/:id',validateToken, updateTeachingModality);


export default router;