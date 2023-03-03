import { Router } from "express";
import { createScheduleController, listRealStatesController } from "../controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";

export const realStateRoutes: Router = Router()

realStateRoutes.post('', isAdmin, createScheduleController)
realStateRoutes.get('', listRealStatesController)