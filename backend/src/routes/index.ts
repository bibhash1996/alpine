import express from "express";
import asyncHandler from "express-async-handler";
import { ErrorMessages, UnauthorizedError } from "../error";
import AlpineRoute from './secured';
import AuthRoute from './auth';
import jwt from 'jsonwebtoken';

type Request = express.Request;
type Response = express.Response;

const APIRouter = express.Router();

APIRouter.use("/auth", AuthRoute);
APIRouter.use("/alpine", AlpineRoute);

export default APIRouter;