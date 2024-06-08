import { Request, Response } from "express"
import { Subject } from "../models/subject";
import { Department } from "../models/department";

export const getSubjects =  async (req: Request, res: Response) => {
    const listSubjects = await Subject.findAll({
        include:[{ model: Department, attributes:['name']} ]
    });
    res.json(listSubjects)
}

export const getSubjectsDeparments =async (req: Request, res: Response) => {
    const listSubjects1 = await Subject.findAll({
        include:[{ model: Department, attributes:['name']} ]
    });
    //console.log('hola');
    res.json(listSubjects1);
    
}

export const getSubject =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const subject = await Subject.findByPk(id);
    if(subject){
        res.json(subject);
    }else{
        res.status(401).json({
            msg: `No existeix un producte amb el codi ${id}`
        });
    }
}
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