"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const department_1 = require("../controlers/department");
//import validateToken from './validate-token';
const router = (0, express_1.Router)();
router.get('/', department_1.getDeparments);
router.get('/:id', department_1.getDepartment);
router.delete('/:id', department_1.deleteDepartment);
router.post('/', department_1.postDepartment);
router.put('/:id', department_1.updateDepartment);
/*
router.get('/',validateToken, getDepartments);
router.get('/:id', validateToken, getDepartment);
router.delete('/:id', validateToken, deleteDepartment);
router.post('/', validateToken, postDepartment);
router.put('/:id', validateToken, updateDepartment);
*/
exports.default = router;
