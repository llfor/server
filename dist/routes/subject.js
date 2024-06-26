"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subject_1 = require("../controlers/subject");
const router = (0, express_1.Router)();
//router.get('/',validateToken, getSubjects);
router.get('/', subject_1.getSubjects);
//router.get('/depts', getSubjectsDeparments);
//router.get('/:id', validateToken, getSubject);
router.get('/:id', subject_1.getSubject);
//router.delete('/:id', validateToken, deleteSubject);
router.delete('/:id', subject_1.deleteSubject);
//router.post('/', validateToken, postSubject);
router.post('/', subject_1.postSubject);
//router.put('/:id', validateToken, updateSubject);
router.put('/:id', subject_1.updateSubject);
exports.default = router;
