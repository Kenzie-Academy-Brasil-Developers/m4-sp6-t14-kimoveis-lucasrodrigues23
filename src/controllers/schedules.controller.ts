import { Request, Response } from "express"
import { createSchedulesService } from "../services/schedules/createSchedule.services"

export const createScheduleController = async (req: Request, res: Response): Promise<Response> => {

    const body = { ...req.body, user: Number(req.user.id) }

    const newSchedule = await createSchedulesService(body)

    return res.status(201).json(newSchedule)
}

export const listPropertiesSchedulesController = async (req: Request, res: Response): Promise<Response> => {

    return res.json()
}