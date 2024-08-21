import {Router} from 'express';
import { deleteUser, getUser, getUsers, loginUser, newUser, postUser, updateUser } from '../controlers/user';
//import validateToken from './validate-token';


const router = Router();


router.post('/login', loginUser);
router.post('/', newUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);
router.put('/:id', updateUser);

/*
router.get('/',validateToken, getDepartments);
router.get('/:id', validateToken, getDepartment);
router.delete('/:id', validateToken, deleteDepartment);
router.post('/', validateToken, postDepartment);
router.put('/:id', validateToken, updateDepartment);
*/


export default router;

