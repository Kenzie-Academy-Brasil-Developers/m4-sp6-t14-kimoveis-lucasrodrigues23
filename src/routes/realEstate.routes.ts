import { Router } from "express";
import { createRealStateController, createScheduleController, listRealStatesController } from "../controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { validateData } from "../middlewares/validateData.middleware";
import { validateToken } from "../middlewares/validateToken.middlware";
import { createRealEstateSchema } from "../schemas/realState.schema";

export const realStateRoutes: Router = Router()

realStateRoutes.post('', validateToken, isAdmin, validateData(createRealEstateSchema), createRealStateController)
realStateRoutes.get('', listRealStatesController)