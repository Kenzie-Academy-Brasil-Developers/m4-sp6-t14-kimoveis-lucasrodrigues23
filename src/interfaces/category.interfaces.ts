import { z } from "zod"
import { createCategorySchema, returnCategorySchema, listCategoriesSChema, listCategoryPropertiesSChema } from "../schemas/categories.schema"


export type tCategoryCreateData = z.infer<typeof createCategorySchema>

export type tCategoryrReturn = z.infer<typeof returnCategorySchema>

export type tListCategories = z.infer<typeof listCategoriesSChema>

export type tListCategoriesProperties = z.infer<typeof listCategoryPropertiesSChema>