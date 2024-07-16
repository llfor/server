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
exports.updateDepartment = exports.postDepartment = exports.deleteDepartment = exports.getDepartment = exports.getDeparments = void 0;
const department_1 = require("../models/department");
const getDeparments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listDepartments = yield department_1.Department.findAll();
    res.json(listDepartments);
});
exports.getDeparments = getDeparments;
const getDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const department = yield department_1.Department.findByPk(id);
    if (department) {
        res.json(department);
    }
    else {
        res.status(401).json({
            msg: `No existeix departament amb el codi ${id}`
        });
    }
});
exports.getDepartment = getDepartment;
const deleteDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const department = yield department_1.Department.findByPk(id);
    if (!department) {
        res.status(404).json({
            msg: `No existeix un producte amb el codi ${id}`
        });
    }
    else {
        yield department.destroy();
        res.json({
            msg: 'Registre eliminat amb èxit'
        });
    }
});
exports.deleteDepartment = deleteDepartment;
const postDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield department_1.Department.create(body);
        res.json({
            msg: 'Registre creat amb èxit'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Errada 10'
        });
    }
});
exports.postDepartment = postDepartment;
const updateDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const department = yield department_1.Department.findByPk(id);
        if (department) {
            yield department.update(body);
            res.json({
                msg: 'Registre actualitzat amb èxit'
            });
        }
        else {
            res.status(404).json({
                msg: `No existeix un producte amb el codi ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Errada 11'
        });
    }
});
exports.updateDepartment = updateDepartment;
