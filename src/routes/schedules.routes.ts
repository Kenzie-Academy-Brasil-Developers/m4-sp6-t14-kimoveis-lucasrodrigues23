import { Router } from "express";
import { createScheduleController, listPropertiesSchedulesController } from "../controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { validateDataCreateSchedule } from "../middlewares/validateDataCreateSchedule.middleware";
import { validateToken } from "../middlewares/validateToken.middlware";
import { createScheduleSchema } from "../schemas/schedules.schema";

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', validateToken, validateDataCreateSchedule(createScheduleSchema), createScheduleController)
schedulesRoutes.get('/realEstate/:id', validateToken, isAdmin, listPropertiesSchedulesController)
