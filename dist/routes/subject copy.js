"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subject_1 = require("../controlers/subject");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
//router.get('/',validateToken, getSubjects);
router.get('/', subject_1.getSubjects);
router.get('/depts', subject_1.getSubjectsDeparments);
router.get('/:id', validate_token_1.default, subject_1.getSubject);
router.delete('/:id', validate_token_1.default, subject_1.deleteSubject);
router.post('/', validate_token_1.default, subject_1.postSubject);
router.put('/:id', validate_token_1.default, subject_1.updateSubject);
exports.default = router;
