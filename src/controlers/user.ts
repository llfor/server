import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

export const getUsers =  async (req: Request, res: Response) => {
    const listUsers = await User.findAll();
    res.json(listUsers);
}

export const newUser = async (req: Request, res: Response) => {
    
    const {username, password}= req.body;

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
            password: hashedPassword
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
    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY || 'alfa' )

    res.json(token);


}