"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teaching_modality_1 = require("../controlers/teaching_modality");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, teaching_modality_1.getTeachingModalities);
router.get('/:id', validate_token_1.default, teaching_modality_1.getTeachingModality);
router.delete('/:id', validate_token_1.default, teaching_modality_1.deleteTeachingModality);
router.post('/', validate_token_1.default, teaching_modality_1.postTeachingModality);
router.put('/:id', validate_token_1.default, teaching_modality_1.updateTeachingModality);
exports.default = router;
