import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { ZodTypeAny } from "zod";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { tUserReturn } from "../interfaces/user.interfaces";

export const valideteDataCreateUserMiddleware = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction) => {

    const reqEmail: string = req.body.email

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
            email: reqEmail
        }
    })

    if (findUser) {
        throw new AppError('Email already exists', 409)
    }

    const validateData: tUserReturn = schema.parse(req.body)

    req.body = validateData

    return next()

}