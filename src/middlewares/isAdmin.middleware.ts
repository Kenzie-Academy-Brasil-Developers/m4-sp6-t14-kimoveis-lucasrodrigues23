import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";


export const isAdmin = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {


    const authenticateUserAdmin = req.user.admin

    if (!authenticateUserAdmin) {
        throw new AppError('Insufficient permission', 403)
    }
    return next()

}