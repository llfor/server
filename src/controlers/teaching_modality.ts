import { Request, Response } from "express";
import { TeachingModality } from "../models/teaching_modality";

export const getTeachingModalities =  async (req: Request, res: Response) => {
    const list = await TeachingModality.findAll();
    res.json(list);
}

export const getTeachingModality =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const register = await TeachingModality.findByPk(id);
    if(register){
        res.json(register);
    }else{
        res.status(401).json({
            msg: `No existeix registre amb el codi ${id}. Modalitat educativa`
        });
    }
}

export const deleteTeachingModality =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const register = await TeachingModality.findByPk(id);
    if(!register){
        res.status(404).json({
            msg: `No existeix un registre amb el codi ${id}. Modalitat educativa`
        });
    }else{
        await register.destroy();
        res.json({
            msg: 'Registre eliminat amb èxit. Modalitat educativa'
        })  
    }
}
export const postTeachingModality =  async (req: Request, res: Response) => {
    const {body} = req;
    try {
        await TeachingModality.create(body);
        res.json({
            msg: 'Registre creat amb èxit'
        })
           
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Errada de creació del registre. Modalitat educativa'
        })        
    }
}
export const updateTeachingModality =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const registre = await TeachingModality.findByPk(id);
        if(registre){
            await registre.update(body);
            res.json({
                msg: 'Registre actualitzat amb èxit. Modalitat educativa'
            })
        }else{
            res.status(404).json({
                msg: `No existeix un registre amb el codi ${id}. Modalitat educativa`
            });        
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Errada actualitzant registre. Modalitat educativa'
        })        
    }
}