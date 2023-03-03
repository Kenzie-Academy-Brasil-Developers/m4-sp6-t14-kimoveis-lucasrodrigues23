import { z } from "zod"
import { createCategorySchema, returnCategorySchema, tListCategoriesSChema } from "../schemas/categories.schema"


export type tCategoryCreateData = z.infer<typeof createCategorySchema>

export type tCategoryrReturn = z.infer<typeof returnCategorySchema>

export type tListCategories = z.infer<typeof tListCategoriesSChema>