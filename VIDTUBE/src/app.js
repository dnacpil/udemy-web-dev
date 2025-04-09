import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//Middlewares
app.use(
    cors({
        origin: "process.env.CORS_ORIGIN",
        credentials: true
    })
)
//common middleware
app.use(express.json({limit: "16kb"}))
app.use(express.json(express.urlencoded({extended: true, limit: "16kb"})))
app.use(express.static("public"))
app.use(cookieParser())

//import routes
import healthchechRouter from "./routes/healthcheck.routes.js"
import userRouter from "./routes/user.routes.js" //you can call the import anything
import { errorHandler } from "./middlewares/error.middlewares.js"

//routes
app.use("/api/v1/healthcheck", healthchechRouter)
app.use("/api/v1/users", userRouter)

//app.use(errorHandler)

export { app }