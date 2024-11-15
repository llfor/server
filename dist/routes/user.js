"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controlers/user");
//import validateToken from './validate-token';
const validate_firebase_token_1 = __importDefault(require("./validate-firebase-token"));
const router = (0, express_1.Router)();
router.post('/login', user_1.loginUser);
router.post('/', validate_firebase_token_1.default, user_1.newUser);
router.get('/', validate_firebase_token_1.default, user_1.getUsers);
router.get('/:id', validate_firebase_token_1.default, user_1.getUser);
router.delete('/:id', validate_firebase_token_1.default, user_1.deleteUser);
router.post('/', validate_firebase_token_1.default, user_1.postUser);
router.put('/:id', validate_firebase_token_1.default, user_1.updateUser);
/*
router.get('/',validateToken, getDepartments);
router.get('/:id', validateToken, getDepartment);
router.delete('/:id', validateToken, deleteDepartment);
router.post('/', validateToken, postDepartment);
router.put('/:id', validateToken, updateDepartment);
*/
exports.default = router;
