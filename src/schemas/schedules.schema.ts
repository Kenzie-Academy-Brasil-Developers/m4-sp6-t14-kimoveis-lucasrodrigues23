import z from 'zod'

export const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstate: z.number(),
    user: z.number()
})

export const returnScheduleSchema = createScheduleSchema.extend({
    id: z.number(),
})
