import express from "express"

import downloadRoute from "./download.route.js"

const router = express.Router()

router.use("/download", downloadRoute)

export default router