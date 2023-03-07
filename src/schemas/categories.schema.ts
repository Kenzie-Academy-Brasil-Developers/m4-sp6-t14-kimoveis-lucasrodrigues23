
import { z } from "zod";
import { listRealEstateSchema } from "./realState.schema";

export const createCategorySchema = z.object({
    name: z.string().max(45)
})

export const returnCategorySchema = createCategorySchema.extend({
    id: z.number()
})

export const listCategoriesSChema = returnCategorySchema.array()

export const listCategoryPropertiesSChema = returnCategorySchema.extend({
    realEstate: listRealEstateSchema
})