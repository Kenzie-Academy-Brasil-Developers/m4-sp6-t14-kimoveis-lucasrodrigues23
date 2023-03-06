import { Request, Response } from "express";
import { createCategoryService } from "../services/categories/createCategory.services";
import { listCategoriesService } from "../services/categories/listCategories.services";
import { listCategoryPropertiesService } from "../services/categories/listCategoriesProperties.services";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const newwCategory = await createCategoryService(req.body)

    return res.status(201).json(newwCategory)
}

export const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const listCategories = await listCategoriesService()

    return res.status(200).json(listCategories)
}

export const listCategoryPropertiesController = async (req: Request, res: Response): Promise<Response> => {

    const reqId = Number(req.params.id)

    const listRealEstate = listCategoryPropertiesService(reqId)

    return res.status(200).json(listRealEstate)
}