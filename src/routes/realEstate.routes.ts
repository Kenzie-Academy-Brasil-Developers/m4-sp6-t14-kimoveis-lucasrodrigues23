import { Router } from "express";
import { createRealStateController, createScheduleController, listRealStatesController } from "../controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { validateDataCreateRealEstate } from "../middlewares/validateDataCreateRealEstate.middleware";
import { validateToken } from "../middlewares/validateToken.middlware";
import { createRealEstateSchema } from "../schemas/realState.schema";

export const realStateRoutes: Router = Router()

realStateRoutes.post('', validateToken, isAdmin, validateDataCreateRealEstate(createRealEstateSchema), createRealStateController)
realStateRoutes.get('', listRealStatesController)