import { Router } from "express";
import { createScheduleController, listRealStatesController } from "../controllers";

export const realStateRoutes: Router = Router()

realStateRoutes.post('', createScheduleController)
realStateRoutes.get('', listRealStatesController)