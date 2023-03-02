import 'express-async-errors'
import express, { Application } from "express"
import { usersRoutes, loginRoutes, categoryRoutes, realStateRoutes, schedulesRoutes } from "./routes";
import { handleError } from "./errors";


export const app: Application = express()

app.use(express.json())

app.use('/users', usersRoutes)
app.use('/login', loginRoutes)
app.use('/categories', categoryRoutes)
app.use('/realEstate', realStateRoutes)
app.use('/schedules', schedulesRoutes)

app.use(handleError)

export default app