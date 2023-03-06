import { z } from "zod"
import { createRealEstateSchema, listRealEstateSchema, retunrRealEstateSchema } from "../schemas/realState.schema"


export type tRealEstateCreateData = z.infer<typeof createRealEstateSchema>

export type tRealEstateReturn = z.infer<typeof retunrRealEstateSchema>

export type tListRealEstate = z.infer<typeof listRealEstateSchema>