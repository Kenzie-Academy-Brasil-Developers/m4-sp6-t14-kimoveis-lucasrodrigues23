import { Router } from "express";
import { createUserController, listUsersController, softDeleteUserController, updateUserController } from "../controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { userExixsts } from "../middlewares/userExists.middleware";
import { validateData } from "../middlewares/validateData.middleware";
import { validateToken } from "../middlewares/validateToken.middlware";
import { createUserSchema, updateUserSchama } from "../schemas/users.schema";

export const usersRoutes: Router = Router()

usersRoutes.post('', validateData(createUserSchema), createUserController)
usersRoutes.get('', validateToken, isAdmin, listUsersController)
usersRoutes.patch('/:id', userExixsts, validateToken, validateData(updateUserSchama), updateUserController)
usersRoutes.delete('/:id', userExixsts, validateToken, isAdmin, softDeleteUserController)