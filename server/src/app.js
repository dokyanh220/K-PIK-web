import express from "express"
import cors from "cors"
import morgan from "morgan"
import rateLimit from "express-rate-limit"
import router from "./routes/routes.js"
import proxyRoute from "./routes/proxy.route.js"

const app = express()

// middleware
app.use(cors({ origin: "*" }))
app.use(express.json())
app.use(morgan("dev"))

// rate limit
app.use(rateLimit({
    windowMs: 60 * 1000,
    max: 30
}))

// routes
app.use("/api", router)

// proxy
app.use("/", proxyRoute)

// health check
app.get("/", (req, res) => {
    res.send("K-PIK API running 🚀")
})

export default app