import { Request, Response } from "express"
import { Subject } from "../models/subject";
import { Department } from "../models/department";
import { User } from "../models/user";
import { TeachingModality} from "../models/teaching_modality"

export const getSubjects = async (req: Request, res: Response) => {
    const listSubjects = await Subject.findAll({
        include: [
            { model: Department, attributes: ['name'] },
            { model: User, attributes: ['teacher_name'] },
            { model: TeachingModality, attributes: ['name'] }

        ]
    });
    res.json(listSubjects)
}

export const getSubjectsfiltered = async (req: Request, res: Response) => {
    try {
        // Obtenir els paràmetres de filtratge de la sol·licitud
        const { userId, teaching_modalityId } = req.query;

        // Construir l'objecte de condicions (where) per filtrar
        const conditions: any = {};

        if (userId) {
            conditions.userId = userId;
        }

        if (teaching_modalityId) {
            conditions.teaching_modalityId = teaching_modalityId;
        }

        // Realitzar la consulta amb els filtres aplicats
        const listSubjects = await Subject.findAll({
            where: conditions,
            include: [
                { model: Department, attributes: ['name'] },
                { model: User, attributes: ['teacher_name'] },
                { model: TeachingModality, attributes: ['name'] }
            ]
        });

        // Retornar la llista de subjects filtrada
        res.json(listSubjects);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving subjects', error });
    }
};



export const getSubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const subject = await Subject.findByPk(id, {
        include: [
            { model: Department, attributes: ['name'] },
            { model: User, attributes: ['teacher_name'] },
            { model: TeachingModality, attributes: ['name'] }
        ]
    });
    if (subject) {
        res.json(subject);
    } else {
        res.status(401).json({
            msg: `No existeix un producte amb el codi ${id}`
        });
    }
}
export const deleteSubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const subject = await Subject.findByPk(id);
    if (!subject) {
        res.status(404).json({
            msg: `No existeix un producte amb el codi ${id}`
        });
    } else {
        await subject.destroy();
        res.json({
            msg: 'Registre eliminat amb èxit'
        })

    }
}
export const postSubject = async (req: Request, res: Response) => {
    const { body } = req;
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
export const updateSubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const subject = await Subject.findByPk(id);
        if (subject) {
            await subject.update(body);
            res.json({
                msg: 'Registre actualitzat amb èxit'
            })

        } else {
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
/*
export const getSubjectsDeparments =async (req: Request, res: Response) => {
    const listSubjects1 = await Subject.findAll({
        include:[{ model: Department, attributes:['name']} ]
    });
    res.json(listSubjects1);
    
}
export const getSubjectsFull =async (req: Request, res: Response) => {
    const listSubjects1 = await Subject.findAll({
        include:[
            { model: Department, attributes:['name']},
            { model: User, attributes:['teacher_name']}
        ]
    });
    res.json(listSubjects1);
    
}
*/