import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.services";
import { listUsersService } from "../services/users/listUsers.services";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {

    const userData = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

export const listUsersController = async (req: Request, res: Response): Promise<Response> => {

    const listUsers = await listUsersService()

    return res.status(200).json(listUsers)
}

export const updateUserController = async (rwq: Request, res: Response): Promise<Response> => {
    return res.json()
}

export const softDeleteUserController = async (rwq: Request, res: Response): Promise<Response> => {
    return res.json()
}