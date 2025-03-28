import express from "express"
import cors from "cors"

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

export { app }