import { Router } from "express";
import { createScheduleController, listPropertiesSchedulesController } from "../controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { validateToken } from "../middlewares/validateToken.middlware";

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', validateToken, createScheduleController)
schedulesRoutes.get('/realEstate/:id', validateToken, isAdmin, listPropertiesSchedulesController)
