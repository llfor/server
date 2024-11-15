import {Request, Response, NextFunction} from 'express';
//import jwt from 'jsonwebtoken';
import admin from '../config/firebaseAdmin';

const validateFirebaseToken = (req: Request, res: Response, next: NextFunction) => {

    const headerToken = req.headers['authorization'];
    if (headerToken != undefined && headerToken.startsWith('Bearer')) {
        const bearerToken = headerToken.slice(7);
        // Té token
        try {
            
            // Verifica el token JWT amb Firebase Admin
            const decodedToken = admin.auth().verifyIdToken(bearerToken);
      
            // Afegim la informació del token al request per a ús posterior
            (req as any).user = decodedToken;

            next();            
        } catch (error) {
            res.status(401).json({
                msg: 'Token no vàlid'
            })
        }

    } else {
        res.status(401).json({
            msg: 'Accés denegat'
        })
    }

}

export default validateFirebaseToken;