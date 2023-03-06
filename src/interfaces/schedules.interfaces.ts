import { z } from "zod";
import { createScheduleSchema, returnScheduleSchema } from "../schemas/schedules.schema";

export type tScheduleCreateData = z.infer<typeof createScheduleSchema>

export type tScheduleReturn = z.infer<typeof returnScheduleSchema>