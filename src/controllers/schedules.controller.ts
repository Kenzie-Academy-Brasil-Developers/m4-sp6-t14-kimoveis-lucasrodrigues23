import { Request, Response } from "express"
import { createSchedulesService } from "../services/schedules/createSchedule.services"
import { listPropertiesSchedulesService } from "../services/schedules/listSchedules.services"

export const createScheduleController = async (req: Request, res: Response): Promise<Response> => {

    const newSchedule = await createSchedulesService(req.body)

    return res.status(201).json({ "message": "Schedule created" })
}

export const listPropertiesSchedulesController = async (req: Request, res: Response): Promise<Response> => {

    const listSchedules = await listPropertiesSchedulesService(Number(req.params.id))

    return res.status(200).json(listSchedules)
}