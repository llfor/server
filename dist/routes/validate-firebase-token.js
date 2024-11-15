"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import jwt from 'jsonwebtoken';
const firebaseAdmin_1 = __importDefault(require("../config/firebaseAdmin"));
const validateFirebaseToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    if (headerToken != undefined && headerToken.startsWith('Bearer')) {
        const bearerToken = headerToken.slice(7);
        // Té token
        try {
            // Verifica el token JWT amb Firebase Admin
            const decodedToken = firebaseAdmin_1.default.auth().verifyIdToken(bearerToken);
            // Afegim la informació del token al request per a ús posterior
            req.user = decodedToken;
            next();
        }
        catch (error) {
            res.status(401).json({
                msg: 'Token no vàlid'
            });
        }
    }
    else {
        res.status(401).json({
            msg: 'Accés denegat'
        });
    }
};
exports.default = validateFirebaseToken;
