import express from "express"
import { downloadData } from "../controllers/download.controller.js"
import { detectPlatformMiddleware } from "../middlewares/platform.middleware.js"
import { validateByPlatform } from "../middlewares/validate.middleware.js"

const router = express.Router()

router.post("/tiktok", detectPlatformMiddleware, validateByPlatform, downloadData)
router.post("/instagram", detectPlatformMiddleware, validateByPlatform, downloadData)

export default router