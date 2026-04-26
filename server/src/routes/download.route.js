import express from "express"
import { downloadData } from "../controllers/download.controller.js"
import { validateUrlMiddleware } from "../middlewares/validate.middleware.js"

const router = express.Router()

router.post("/tiktok", validateUrlMiddleware, downloadData)
router.post("/instagram", validateUrlMiddleware, downloadData)
router.post("/facebook", validateUrlMiddleware, downloadData)
router.post("/youtube", validateUrlMiddleware, downloadData)
router.post("/pinterest", validateUrlMiddleware, downloadData)

export default router