import { Router } from "express";
import { createUserController, listUsersController, softDeleteUserController, updateUserController } from "../controllers";
import { valideteDataMiddleware } from "../middlewares/validateDataCreateUser.middleware";
import { createUserSchema } from "../schemas/users.schema";

export const usersRoutes: Router = Router()

usersRoutes.post('', valideteDataMiddleware(createUserSchema), createUserController)
usersRoutes.get('', listUsersController)
usersRoutes.patch('/:id', updateUserController)
usersRoutes.put('/:id', softDeleteUserController)