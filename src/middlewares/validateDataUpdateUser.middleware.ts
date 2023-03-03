import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { ZodTypeAny } from "zod"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../errors"
import { tUserReturn } from "../interfaces/user.interfaces"

export const valideteDataUpdateUserMiddleware = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction) => {
    console.log("entrei no middleware");
    
    if (!req.body.email) {
        console.log("if do email");
        let validateData: tUserReturn = schema.parse(req.body)

        req.body = validateData

        if (Object.keys(validateData).length === 0) {
            console.log("if do validate data");
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
        console.log("if da request");
        throw new AppError('Email already exists.', 409)
    }

    let validateData: tUserReturn = schema.parse(req.body)

    req.body = validateData

    if (Object.keys(validateData).length === 0) {
        console.log("if do validate data");
        throw new AppError('requires one of the keys: name, email, password  ', 400)
    }

    return next()

}