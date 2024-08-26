import {Router} from 'express';
import { deleteUser, getUser, getUsers, loginUser, newUser, postUser, updateUser } from '../controlers/user';
import validateToken from './validate-token';


const router = Router();


router.post('/login', loginUser);
router.post('/', validateToken, newUser);
router.get('/', validateToken, getUsers);
router.get('/:id', validateToken, getUser);
router.delete('/:id', validateToken, deleteUser);
router.post('/', validateToken, postUser);
router.put('/:id',validateToken, updateUser);

/*
router.get('/',validateToken, getDepartments);
router.get('/:id', validateToken, getDepartment);
router.delete('/:id', validateToken, deleteDepartment);
router.post('/', validateToken, postDepartment);
router.put('/:id', validateToken, updateDepartment);
*/


export default router;

