import { z } from "zod";
import { returnCategorySchema } from "./categories.schema";

export const createAddressSchema = z.object({
    street: z.string(),
    zipCode: z.string().max(8),
    number: z.string().optional().default('0'),
    city: z.string(),
    state: z.string().max(2)
})
export const addressReturnSchema = createAddressSchema.extend({
    id: z.number()
})

export const createRealEstateSchema = z.object({
    value: z.number().min(0).or(z.string()),
    size: z.number().positive(),
    address: createAddressSchema,
    category: z.number()
})

export const retunrRealEstateSchema = z.object({
    id: z.number(),
    value: z.number().min(0).or(z.string()),
    size: z.number(),
    address: addressReturnSchema,
    sold: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    category: z.object({
        id: z.number(),
        name: z.string()
    })
})

export const listRealEstateSchema = retunrRealEstateSchema.omit({ category: true }).array()