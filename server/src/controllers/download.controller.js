import { getData } from "../services/download.service.js"
import { isTikTokUrl } from "../utils/validate.js"

export async function downloadVideo(req, res) {
    let { url } = req.body

    if (!url) {
        return res.status(400).json({ error: "Missing URL" })
    }

    if (!isTikTokUrl(url)) {
        return res.status(400).json({ error: "Invalid TikTok URL" })
    }

    try {
        let data = await getData(url)

        return res.json({
            success: true,
            data: data
        })

    } catch (err) {
        console.error(err.message)

        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}