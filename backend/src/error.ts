export const Status = {
    ok: "ok",
    error: "error",
};

export const ErrorMessages = {
    INTERNAL_ERROR: `Internal server error`,
    INVALID_AUTH: "Invalid Authorization ",
    INVALID_PROVIDER: "Invalid provider",
};

export abstract class AlpineError extends Error {
    public errorCode: number;
    public date: Date = new Date();
    constructor(message: string, errorCode: number) {
        super(message);
        this.name = "AlpineError";
        this.errorCode = errorCode;
    }
}

export class BadRequestError extends AlpineError {
    constructor(m: string) {
        super(m, 400);
        this.name = "BadRequestError";
    }
}

export class UnauthorizedError extends AlpineError {
    constructor(m: string) {
        super(m, 401);
        this.name = "UnauthorizedError";
    }
}

export class ForbiddenError extends AlpineError {
    constructor(m: string) {
        super(m, 403);
        this.name = "ForbiddenError";
    }
}

export class NotFoundError extends AlpineError {
    constructor(m: string) {
        super(m, 404);
        this.name = "NotFoundError";
    }
}
export class InternalServerError extends AlpineError {
    constructor(m: string) {
        super(m, 500);
        this.name = "InternalServerError";
    }
}