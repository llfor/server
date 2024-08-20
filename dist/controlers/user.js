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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield user_1.User.findAll();
    res.json(listUsers);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.User.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(401).json({
            msg: `No existeix un usuari amb el codi ${id}`
        });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.User.findByPk(id);
    if (user) {
        yield user.destroy();
        res.json({
            msg: 'Registre eliminat amb èxit'
        });
    }
    else {
        res.status(401).json({
            msg: `No existeix un usuari amb el codi ${id}`
        });
    }
});
exports.deleteUser = deleteUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield user_1.User.create(body);
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
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield user_1.User.findByPk(id);
        if (user) {
            yield user.update(body);
            res.json({
                msg: 'Registre actualitzat amb èxit'
            });
        }
        else {
            res.status(404).json({
                msg: `No existeix un usuari amb el codi ${id}`
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
exports.updateUser = updateUser;
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, teacher_name, email, role } = req.body;
    //Validam usuari a la base de dades
    const user = yield user_1.User.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `Ja existeix un usuari amb el nom ${username}`
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        ///guardam usuari a la base de dades
        yield user_1.User.create({
            username: username,
            password: hashedPassword,
            teacher_name: teacher_name,
            email: email,
            role: role
        });
        res.json({
            msg: `Usuari ${username} creat amb èxit`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Malauradament sha produït una errada',
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    //Validam si usuari existeix a la base de dades
    const user = yield user_1.User.findOne({ where: { username: username } });
    if (!user) {
        return res.status(400).json({
            msg: `No existeix un usuari amb el nom ${username} a la base de dades`
        });
    }
    //Validam el password
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password incorrecte`
        });
    }
    // console.log(passwordValid);
    // Generam el Token
    const token = jsonwebtoken_1.default.sign({
        username: username
    }, process.env.SECRET_KEY || 'alfa');
    res.json(token);
});
exports.loginUser = loginUser;
