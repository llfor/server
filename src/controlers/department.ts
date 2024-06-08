import { Request, Response } from "express";
import { Department } from "../models/department";

export const getDeparments =  async (req: Request, res: Response) => {
    const listDepartments = await Department.findAll({
      //  include:[{ model: Department, attributes:['name']} ]
    });
    res.json(listDepartments)
}

export const getDepartment =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const department = await Department.findByPk(id);
    if(department){
        res.json(department);
    }else{
        res.status(401).json({
            msg: `No existeix departament amb el codi ${id}`
        });
    }
}

export const deleteDepartment =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const department = await Department.findByPk(id);
    if(!department){
        res.status(404).json({
            msg: `No existeix un producte amb el codi ${id}`
        });
    }else{
        await department.destroy();
        res.json({
            msg: 'Registre eliminat amb èxit'
        })  
    }
}
export const postDepartment=  async (req: Request, res: Response) => {
    const {body} = req;
    try {
        await Department.create(body);
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
export const updateDepartment =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const department = await Department.findByPk(id);
        if(department){
            await department.update(body);
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