import { hashSync } from 'bcryptjs'
import z from 'zod'

export const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().optional(),
    password: z.string().min(4).max(20).transform((pass) => {
        return hashSync(pass, 10)
    })
})

export const updateUserSchamar = createUserSchema.partial()

export const returnUserSchema = createUserSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({ password: true })

export const listUsersSchema = returnUserSchema.array()