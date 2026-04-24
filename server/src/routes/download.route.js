import express from "express"
import { downloadVideo } from "../controllers/download.controller.js"
import { detectPlatformMiddleware } from "../middlewares/platform.middleware.js"
import { validateByPlatform } from "../middlewares/validate.middleware.js"

const router = express.Router()

router.post("/", detectPlatformMiddleware, validateByPlatform, downloadVideo)

export default router