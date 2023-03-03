import { hashSync } from 'bcryptjs'
import z from 'zod'

export const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().optional().default(false),
    password: z.string().max(120)
})

export const updateUserSchama = createUserSchema.partial()

export const returnUserSchema = createUserSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
}).omit({ password: true })

export const listUsersSchema = returnUserSchema.array()