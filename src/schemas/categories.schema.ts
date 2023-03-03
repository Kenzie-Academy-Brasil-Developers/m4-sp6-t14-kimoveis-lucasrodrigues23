
import { z } from "zod";

export const createCategorySchema = z.object({
    name: z.string().max(45)
})

export const returnCategorySchema = createCategorySchema.extend({
    id: z.number()
})

export const tListCategoriesSChema = returnCategorySchema.array()
