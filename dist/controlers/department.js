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
exports.getDepartment = exports.getDeparments = void 0;
//import { Subject } from "../models/subject";
const department_1 = require("../models/department");
const getDeparments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listDepartments = yield department_1.Department.findAll({
    //  include:[{ model: Department, attributes:['name']} ]
    });
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
/*
export const deleteSubject =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const subject = await Subject.findByPk(id);
    if(!subject){
        res.status(404).json({
            msg: `No existeix un producte amb el codi ${id}`
        });
    }else{
        await subject.destroy();
        res.json({
            msg: 'Registre eliminat amb èxit'
        })
        
    }
}
export const postSubject =  async (req: Request, res: Response) => {
    const {body} = req;
    try {
        await Subject.create(body);
        res.json({
            msg: 'Registre creat amb èxit'
        })
           
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Errada 10'
        })
    }



    
}
export const updateSubject =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const subject = await Subject.findByPk(id);
        if(subject){
            await subject.update(body);
            res.json({
                msg: 'Registre actualitzat amb èxit'
            })
     
        }else{
            res.status(404).json({
                msg: `No existeix un producte amb el codi ${id}`
            });
        }
           
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Errada 11'
        })
        
    }


}
*/ 
