import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { ZodTypeAny } from "zod"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../errors"
import { tUserReturn } from "../interfaces/user.interfaces"

export const valideteDataUpdateUserMiddleware = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction) => {

    if (!req.body.email) {
        let validateData: tUserReturn = schema.parse(req.body)

        req.body = validateData

        if (Object.keys(validateData).length === 0) {
            throw new AppError('requires one of the keys: name, email, password  ', 400)
        }

        return next()
    }

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
            email: req.body.email
        }
    })

    if (findUser) {
        throw new AppError('Email already exists.', 409)
    }

    let validateData: tUserReturn = schema.parse(req.body)

    req.body = validateData

    if (Object.keys(validateData).length === 0) {
        throw new AppError('requires one of the keys: name, email, password  ', 400)
    }

    return next()

}