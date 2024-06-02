import {Router} from 'express';
import { getUsers, loginUser, newUser } from '../controlers/user';
import validateToken from './validate-token';


const router = Router();

//router.get('/', validateToken, getUsers);
router.get('/', getUsers);
router.post('/', newUser);
router.post('/login', loginUser)
export default router;

