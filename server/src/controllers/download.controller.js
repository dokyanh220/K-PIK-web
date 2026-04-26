import { getData } from "../services/download.service.js"

export async function downloadData(req, res) {
    const { url } = req.body;
    const platform = req.platform;

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