"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subject_1 = require("../controlers/subject");
//import validateToken from './validate-token';
const validate_firebase_token_1 = __importDefault(require("./validate-firebase-token"));
const router = (0, express_1.Router)();
/*
router.get('/', getSubjectsfiltered);
router.get('/:id', getSubject);
router.delete('/:id', deleteSubject);
router.post('/', postSubject);
router.put('/:id', updateSubject);
*/
router.get('/', validate_firebase_token_1.default, subject_1.getSubjectsfiltered);
router.get('/:id', validate_firebase_token_1.default, subject_1.getSubject);
router.delete('/:id', validate_firebase_token_1.default, subject_1.deleteSubject);
router.post('/', validate_firebase_token_1.default, subject_1.postSubject);
router.put('/:id', validate_firebase_token_1.default, subject_1.updateSubject);
exports.default = router;
