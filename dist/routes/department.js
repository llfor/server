"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const department_1 = require("../controlers/department");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
/*
router.get('/', getDeparments);
router.get('/:id', getDepartment);
router.delete('/:id', deleteDepartment);
router.post('/', postDepartment);
router.put('/:id', updateDepartment);
*/
router.get('/', validate_token_1.default, department_1.getDepartments);
router.get('/:id', validate_token_1.default, department_1.getDepartment);
router.delete('/:id', validate_token_1.default, department_1.deleteDepartment);
router.post('/', validate_token_1.default, department_1.postDepartment);
router.put('/:id', validate_token_1.default, department_1.updateDepartment);
exports.default = router;
