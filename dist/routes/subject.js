"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subject_1 = require("../controlers/subject");
//import validateToken from './validate-token';
const router = (0, express_1.Router)();
router.get('/', subject_1.getSubjectsfiltered);
router.get('/:id', subject_1.getSubject);
router.delete('/:id', subject_1.deleteSubject);
router.post('/', subject_1.postSubject);
router.put('/:id', subject_1.updateSubject);
/*
router.get('/',validateToken, getSubjects);
router.get('/:id', validateToken, getSubject);
router.delete('/:id', validateToken, deleteSubject);
router.post('/', validateToken, postSubject);
router.put('/:id', validateToken, updateSubject);
*/
exports.default = router;
