import { z } from "zod";
import { returnCategorySchema } from "./categories.schema";

export const createAddressSchema = z.object({
    street: z.string(),
    zipCode: z.string().max(8),
    number: z.string().optional().default(''),
    city: z.string(),
    state: z.string().max(2)
})


export const createRealEstateSchema = z.object({
    value: z.number().min(0).or(z.string()),
    size: z.number().positive(),
    address: createAddressSchema,
    category: z.number()
})

export const retunrRealEstateSchema = z.object({
    id: z.number(),
    value: z.number().or(z.string()),
    size: z.number().positive(),
    address: createAddressSchema.extend({
        id: z.number()
    }),
    category: z.number().or(returnCategorySchema),
    sold: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const listRealEstateSchema = retunrRealEstateSchema.omit({ category: true }).array()