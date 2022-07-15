import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { body } from "express-validator";
import jwt from 'jsonwebtoken';
import { login, signUp } from "../controller/user";
import { ErrorMessages, UnauthorizedError } from "../error";
import { validate } from "./util";

const AlpineAPI = express.Router();

AlpineAPI.post("/signup",
    [
        body('email').exists().isString().withMessage("Invalid email"),
        body('password').exists().isString().withMessage("Invalid password"),
        validate as any
    ],
    asyncHandler(async (req: Request, res: Response, next: any) => {
        const response = await signUp(req.body.email as string, req.body.password as string);
        res.zJson(response);
    })
)

AlpineAPI.post("/login",
    [
        body('email').exists().isString().withMessage("Invalid email"),
        body('password').exists().isString().withMessage("Invalid password"),
        validate as any
    ],
    asyncHandler(async (req: Request, res: Response, next: any) => {
        const response = await login(req.body.email as string, req.body.password as string);
        res.zJson(response);
    })
)


export default AlpineAPI;