import { Router } from "express";
import { createUserController, listUsersController, softDeleteUserController, updateUserController } from "../controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { userExixsts } from "../middlewares/userExists.middleware";
import { valideteDataCreateUserMiddleware } from "../middlewares/validateDataCreateUser.middleware";
import { valideteDataUpdateUserMiddleware } from "../middlewares/validateDataUpdateUser.middleware";
import { validateToken } from "../middlewares/validateToken.middlware";
import { createUserSchema, updateUserSchama } from "../schemas/users.schema";

export const usersRoutes: Router = Router()

usersRoutes.post('', valideteDataCreateUserMiddleware(createUserSchema), createUserController)
usersRoutes.get('', validateToken, isAdmin, listUsersController)
usersRoutes.patch('/:id', userExixsts, validateToken, valideteDataUpdateUserMiddleware(updateUserSchama), updateUserController)
usersRoutes.delete('/:id', userExixsts, validateToken, isAdmin, softDeleteUserController)