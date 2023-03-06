import { z } from "zod";

export const createAddressEchema = z.object({
    street: z.string(),
    zipCode: z.string().max(8),
    number: z.string().optional().default(""),
    city: z.string(),
    state: z.string().max(2)
})

export const createRealEstateSchema = z.object({
    value: z.number().gt(0).or(z.string()),
    size: z.number(),
    address: createAddressEchema,
    category: z.number()
})

export const retunrRealEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    sold: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const listRealEstateSchema = retunrRealEstateSchema.array()