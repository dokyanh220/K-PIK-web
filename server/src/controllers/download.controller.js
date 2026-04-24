import { getData } from "../services/download.service.js"
import { detectAndValidateUrl } from "../utils/validate.js"

export async function downloadData(req, res) {
    let { url } = req.body
    const platform = req.platform

    if (!url) {
        return res.status(400).json({ error: "Missing URL" })
    }

    if (!detectAndValidateUrl(url).valid) {
        return res.status(400).json({ error: "Invalid URL" })
    }

    try {
        let data = await getData(url, platform)

        return res.json({
            success: true,
            data
        })

    } catch (err) {
        console.error(err.message)

        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}