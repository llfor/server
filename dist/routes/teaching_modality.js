"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teaching_modality_1 = require("../controlers/teaching_modality");
//import validateToken from './validate-token';
const router = (0, express_1.Router)();
router.get('/', teaching_modality_1.getTeachingModalities);
router.get('/:id', teaching_modality_1.getTeachingModality);
router.delete('/:id', teaching_modality_1.deleteTeachingModality);
router.post('/', teaching_modality_1.postTeachingModality);
router.put('/:id', teaching_modality_1.updateTeachingModality);
/*
router.get('/',validateToken, getDepartments);
router.get('/:id', validateToken, getDepartment);
router.delete('/:id', validateToken, deleteDepartment);
router.post('/', validateToken, postDepartment);
router.put('/:id', validateToken, updateDepartment);
*/
exports.default = router;
