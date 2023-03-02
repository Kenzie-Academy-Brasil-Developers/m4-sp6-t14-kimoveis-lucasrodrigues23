import { Router } from "express";
import { createCategoryController, listCategoryPropertiesController } from "../controllers";

export const categoryRoutes: Router = Router()

categoryRoutes.post('', createCategoryController)
categoryRoutes.get('', listCategoryPropertiesController)
categoryRoutes.get('/:id/realEstate', listCategoryPropertiesController)