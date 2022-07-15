import { validationResult } from "express-validator";
import { BadRequestError } from "../error";

export function validate(req: Request, res: Response, next: any) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new BadRequestError(
            (errors.array({ onlyFirstError: true })[0] as any).msg
        );
    }
    next();
}