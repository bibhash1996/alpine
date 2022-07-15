import { Status, ErrorMessages, BadRequestError, AlpineError } from "./error";
import { Response, Request } from "express";
import Logger from './logger';
import { v4 } from "uuid";

function exceptionHandler(err: any, req: Request, res: Response, next: any) {
    let error;
    if (err instanceof AlpineError) {
        // Known error
        console.log(err)
        error = {
            message: err.message,
            code: err.errorCode,
        };
        Logger.error({
            context: res.locals.context,
            requestId: req.headers.zRequestId,
            stackTrace: err.stack,
        });
    } else {
        Logger.error({
            context: res.locals.context,
            requestId: req.headers.zRequestId,
            stackTrace: err.stack,
        });
        error = {
            message: err.message,
            code: err.code,
        };
    }

    res.status(error.code || 500).json({
        status: Status.error,
        data: {},
        timestamp: Date.now(),
        error: error,
        requestId: req.headers.zRequestId,
    });
}

function jsonParserErrorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: any
) {
    throw new BadRequestError(err.message);
}

function addCustomMethodsToResponse(req: Request, res: Response, next: any) {
    // This method is used to create a the required response structure.
    // The behaviour is similar to res.json()
    res.zJson = function (value: any | null) {
        value = value == null ? {} : value;
        return res.json({
            status: Status.ok,
            data: value,
            timestamp: Date.now(),
            error: {},
            requestId: req.headers.zRequestId,
        });
    };
    next();
}

function assignRequestId(req: Request, res: Response, next: any) {
    req.headers.zRequestId = v4();
    next();
}



export default {
    addCustomMethodsToResponse,
    exceptionHandler,
    assignRequestId,
    jsonParserErrorHandler,
};