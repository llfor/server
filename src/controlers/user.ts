import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

export const getUsers =  async (req: Request, res: Response) => {
    const listUsers = await User.findAll();
    res.json(listUsers);
}

export const getUser =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (user) {
        res.json(user)
    } else {
        res.status(401).json({
            msg: `No existeix un usuari amb el codi ${id}`
        });  
    }
}

export const deleteUser =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (user) {
        await user.destroy();
        res.json({
            msg: 'Registre eliminat amb èxit'
        })
    } else {
        res.status(401).json({
            msg: `No existeix un usuari amb el codi ${id}`
        });  
    }
}

export const postUser=  async (req: Request, res: Response) => {
    const {body} = req;
    try {
        await User.create(body);
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

export const updateUser =  async (req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const user = await User.findByPk(id);
        if(user){
            await user.update(body);
            res.json({
                msg: 'Registre actualitzat amb èxit'
            })
        }else{
            res.status(404).json({
                msg: `No existeix un usuari amb el codi ${id}`
            });        
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Errada 11'
        })        
    }
}

export const newUser = async (req: Request, res: Response) => {
    
    const {username, password, teacher_name, email, role}= req.body;

    //Validam usuari a la base de dades
    const user = await User.findOne({where: {username: username}});
    if(user){
        return res.status(400).json({
            msg: `Ja existeix un usuari amb el nom ${username}`
        })
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        ///guardam usuari a la base de dades
        await User.create({
            username: username,
            password: hashedPassword,
            teacher_name: teacher_name,
            email: email,
            role: role
        });
        res.json({
        msg: `Usuari ${username} creat amb èxit`
    })
    } catch (error) {
        res.status(400).json({
            msg: 'Malauradament sha produït una errada',
            error
        })
    }
}


export const loginUser = async(req: Request, res: Response) => {
    const {username, password}= req.body;

    //Validam si usuari existeix a la base de dades

    const user : any = await User.findOne({where: {username: username}});
    if (!user){
        return res.status(400).json({
            msg: `No existeix un usuari amb el nom ${username} a la base de dades`
        })

    }
    //Validam el password
    const passwordValid =  await bcrypt.compare(password, user.password);
    if (!passwordValid){
        return res.status(400).json({
            msg : `Password incorrecte`
        })
    }
        // console.log(passwordValid);

    // Generam el Token
    const token = jwt.sign(
        {
        id: user.id,
        username: user.username,
        role: user.role}
        , process.env.SECRET_KEY || 'alfa',
        {expiresIn: '1h'} )

    res.json({token, ...user.toJSON()});


}