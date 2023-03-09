import { Router } from "express";
import { createCategoryController, listCategoryPropertiesController } from "../controllers";
import { listCategoriesController } from "../controllers/categories.controller";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { validateToken } from "../middlewares/validateToken.middlware";

export const categoryRoutes: Router = Router()

categoryRoutes.post('', validateToken, isAdmin, createCategoryController)
categoryRoutes.get('', listCategoriesController)
categoryRoutes.get('/:id/realEstate', listCategoryPropertiesController)