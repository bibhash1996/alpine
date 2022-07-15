import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { body } from "express-validator";
import jwt from 'jsonwebtoken';
import { getAllUsers, getUser, updateProfile } from "../controller/user";
import { ErrorMessages, UnauthorizedError } from "../error";
import { validate } from "./util";

const AlpineAPI = express.Router();


/**
 * @param req 
 * @param res 
 * @param next 
 * Middleware for Authorization
 */
async function secure(req: Request, res: Response, next: any) {
    try {
        const authHeader = req.get('Authorization');
        const tokens = authHeader?.split(" ");
        if (!tokens || (tokens && tokens.length < 2)) {
            throw new UnauthorizedError(ErrorMessages.INVALID_AUTH);
        };
        const authToken = tokens[1];

        const jwtPayload = jwt.verify(authToken, process.env.JWT_SECRET as string as string) as { [key: string]: any };
        res.locals.jwtPayload = jwtPayload;
        return next();
    } catch (error) {
        throw new UnauthorizedError(ErrorMessages.INVALID_AUTH);
    }
}

AlpineAPI.use(asyncHandler(secure));

AlpineAPI.get("/", asyncHandler(async (req: Request, res: Response, next: any) => {
    const response = await getUser(res.locals.jwtPayload)
    res.zJson(response)
}))

AlpineAPI.post("/profile", [
    body('firstName').optional().isString().withMessage("Invalid first name"),
    body('lastName').optional().isString().withMessage("Invalid last name"),
    validate as any
], asyncHandler(async (req: Request, res: Response, next: any) => {
    const response = await updateProfile(req.body.firstName ? req.body.firstName as string : null,
        req.body.lastName ? req.body.lastName as string
            : null,
        res.locals.jwtPayload)
    res.zJson(response)
}))


AlpineAPI.get("/list", asyncHandler(async (req: Request, res: Response, next: any) => {
    const response = await getAllUsers(res.locals.jwtPayload)
    res.zJson(response)
}))

export default AlpineAPI;