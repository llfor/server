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
exports.updateSubject = exports.postSubject = exports.deleteSubject = exports.getSubject = exports.getSubjects = void 0;
const subject_1 = require("../models/subject");
const department_1 = require("../models/department");
const user_1 = require("../models/user");
const getSubjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listSubjects = yield subject_1.Subject.findAll({
        include: [
            { model: department_1.Department, attributes: ['name'] },
            { model: user_1.User, attributes: ['teacher_name'] }
        ]
    });
    res.json(listSubjects);
});
exports.getSubjects = getSubjects;
/*
export const getSubjectsDeparments =async (req: Request, res: Response) => {
    const listSubjects1 = await Subject.findAll({
        include:[{ model: Department, attributes:['name']} ]
    });
    //console.log('hola');
    res.json(listSubjects1);
    
}
*/
/*
export const getSubjectsFull =async (req: Request, res: Response) => {
    const listSubjects1 = await Subject.findAll({
        include:[
            { model: Department, attributes:['name']},
            { model: User, attributes:['teacher_name']}
        ]
    });
    //console.log('hola');
    res.json(listSubjects1);
    
}
*/
const getSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const subject = yield subject_1.Subject.findByPk(id, {
        include: [
            { model: department_1.Department, attributes: ['name'] },
            { model: user_1.User, attributes: ['teacher_name'] }
        ]
    });
    if (subject) {
        res.json(subject);
    }
    else {
        res.status(401).json({
            msg: `No existeix un producte amb el codi ${id}`
        });
    }
});
exports.getSubject = getSubject;
const deleteSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const subject = yield subject_1.Subject.findByPk(id);
    if (!subject) {
        res.status(404).json({
            msg: `No existeix un producte amb el codi ${id}`
        });
    }
    else {
        yield subject.destroy();
        res.json({
            msg: 'Registre eliminat amb èxit'
        });
    }
});
exports.deleteSubject = deleteSubject;
const postSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield subject_1.Subject.create(body);
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
exports.postSubject = postSubject;
const updateSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const subject = yield subject_1.Subject.findByPk(id);
        if (subject) {
            yield subject.update(body);
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
exports.updateSubject = updateSubject;
