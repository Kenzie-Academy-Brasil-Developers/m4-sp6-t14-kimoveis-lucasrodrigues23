import { Router } from "express";
import { createUserController, listUsersController, softDeleteUserController, updateUserController } from "../controllers";
import { valideteDataCreateUserMiddleware } from "../middlewares/validateDataCreateUser.middleware";
import { valideteDataUpdateUserMiddleware } from "../middlewares/validateDataUpdateUser.middleware";
import { createUserSchema, updateUserSchama } from "../schemas/users.schema";

export const usersRoutes: Router = Router()

usersRoutes.post('', valideteDataCreateUserMiddleware(createUserSchema), createUserController)
usersRoutes.get('', listUsersController)
usersRoutes.patch('/:id', valideteDataUpdateUserMiddleware(updateUserSchama), updateUserController)
usersRoutes.delete('/:id', softDeleteUserController)