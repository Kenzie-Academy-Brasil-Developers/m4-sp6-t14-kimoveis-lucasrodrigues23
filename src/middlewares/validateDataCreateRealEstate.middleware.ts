import { Request, Response, NextFunction } from "express"
import { ZodTypeAny } from "zod"
import { tUserReturn } from "../interfaces/user.interfaces"

export const validateDataCreateRealEstate = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction) => {
    const validateData: tUserReturn = schema.parse(req.body)

    req.body = validateData

    return next()

}