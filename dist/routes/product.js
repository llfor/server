"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controlers/product");
//import validateToken from './validate-token';
const router = (0, express_1.Router)();
//router.get('/',validateToken, getProducts);
router.get('/', product_1.getProducts);
exports.default = router;
