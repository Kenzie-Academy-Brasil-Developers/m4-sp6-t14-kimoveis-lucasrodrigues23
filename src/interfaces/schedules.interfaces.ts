import { z } from "zod";
import { createScheduleSchema, returnScheduleSchema } from "../schemas/schedules.schema";
import { tRealEstateReturn } from "./realEstate.interfaces";
import { tUserReturn } from "./user.interfaces";

export type tScheduleCreateData = z.infer<typeof createScheduleSchema>

export type tScheduleReturn = {
    id: number
    date: string
    hour: string
    realEstate: tRealEstateReturn
    user: tUserReturn
}