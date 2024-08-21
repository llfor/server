"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controlers/user");
//import validateToken from './validate-token';
const router = (0, express_1.Router)();
router.post('/login', user_1.loginUser);
router.post('/', user_1.newUser);
router.get('/', user_1.getUsers);
router.get('/:id', user_1.getUser);
router.delete('/:id', user_1.deleteUser);
router.post('/', user_1.postUser);
router.put('/:id', user_1.updateUser);
/*
router.get('/',validateToken, getDepartments);
router.get('/:id', validateToken, getDepartment);
router.delete('/:id', validateToken, deleteDepartment);
router.post('/', validateToken, postDepartment);
router.put('/:id', validateToken, updateDepartment);
*/
exports.default = router;
