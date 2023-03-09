import { Request, Response, NextFunction } from "express"
import { ZodTypeAny } from "zod"
import { tScheduleReturn } from "../interfaces/schedules.interfaces"

export const validateDataCreateSchedule = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction) => {
    req.body = { ...req.body, user: Number(req.user.id) }

    const validateData: tScheduleReturn = schema.parse(req.body)

    req.body = validateData

    return next()

}