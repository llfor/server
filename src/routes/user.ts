import {Router} from 'express';
import { deleteUser, getUser, getUsers, loginUser, newUser, postUser, updateUser } from '../controlers/user';
//import validateToken from './validate-token';
import validateFirebaseToken from './validate-firebase-token';


const router = Router();


router.post('/login', loginUser);
router.post('/', validateFirebaseToken, newUser);
router.get('/', validateFirebaseToken, getUsers);
router.get('/:id', validateFirebaseToken, getUser);
router.delete('/:id', validateFirebaseToken, deleteUser);
router.post('/', validateFirebaseToken, postUser);
router.put('/:id', validateFirebaseToken, updateUser);

/*
router.get('/',validateToken, getDepartments);
router.get('/:id', validateToken, getDepartment);
router.delete('/:id', validateToken, deleteDepartment);
router.post('/', validateToken, postDepartment);
router.put('/:id', validateToken, updateDepartment);
*/


export default router;

