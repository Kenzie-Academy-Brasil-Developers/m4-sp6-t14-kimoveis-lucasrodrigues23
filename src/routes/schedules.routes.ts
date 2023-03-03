import { Router } from "express";
import { createScheduleController, listPropertiesSchedulesController } from "../controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', createScheduleController)
schedulesRoutes.get('/realEstate/:id', isAdmin, listPropertiesSchedulesController)