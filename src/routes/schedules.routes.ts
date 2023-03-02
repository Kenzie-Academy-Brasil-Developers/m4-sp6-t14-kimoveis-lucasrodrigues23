import { Router } from "express";
import { createScheduleController, listPropertiesSchedulesController } from "../controllers";

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', createScheduleController)
schedulesRoutes.get('/realEstate/:id', listPropertiesSchedulesController)