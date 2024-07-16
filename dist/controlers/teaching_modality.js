"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTeachingModality = exports.postTeachingModality = exports.deleteTeachingModality = exports.getTeachingModality = exports.getTeachingModalities = void 0;
const teaching_modality_1 = require("../models/teaching_modality");
const getTeachingModalities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield teaching_modality_1.TeachingModality.findAll();
    res.json(list);
});
exports.getTeachingModalities = getTeachingModalities;
const getTeachingModality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const register = yield teaching_modality_1.TeachingModality.findByPk(id);
    if (register) {
        res.json(register);
    }
    else {
        res.status(401).json({
            msg: `No existeix registre amb el codi ${id}. Modalitat educativa`
        });
    }
});
exports.getTeachingModality = getTeachingModality;
const deleteTeachingModality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const register = yield teaching_modality_1.TeachingModality.findByPk(id);
    if (!register) {
        res.status(404).json({
            msg: `No existeix un registre amb el codi ${id}. Modalitat educativa`
        });
    }
    else {
        yield register.destroy();
        res.json({
            msg: 'Registre eliminat amb èxit. Modalitat educativa'
        });
    }
});
exports.deleteTeachingModality = deleteTeachingModality;
const postTeachingModality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield teaching_modality_1.TeachingModality.create(body);
        res.json({
            msg: 'Registre creat amb èxit'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Errada de creació del registre. Modalitat educativa'
        });
    }
});
exports.postTeachingModality = postTeachingModality;
const updateTeachingModality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const registre = yield teaching_modality_1.TeachingModality.findByPk(id);
        if (registre) {
            yield registre.update(body);
            res.json({
                msg: 'Registre actualitzat amb èxit. Modalitat educativa'
            });
        }
        else {
            res.status(404).json({
                msg: `No existeix un registre amb el codi ${id}. Modalitat educativa`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Errada actualitzant registre. Modalitat educativa'
        });
    }
});
exports.updateTeachingModality = updateTeachingModality;
