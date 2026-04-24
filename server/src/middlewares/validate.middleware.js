import { detectAndValidateUrl } from "../utils/validate.js";

export function validateByPlatform(req, res, next) {
    let { url } = req.body;
    let platform = req.platform;

    if (platform === "tiktok") {
        if (!detectAndValidateUrl(url).valid) {
            return res.status(400).json({
                success: false,
                message: "Invalid TikTok URL"
            });
        }
    }

    if (platform === "instagram") {

    }

    // thêm sau
    // if (platform === "facebook") { ... }
    // if (platform === "pinterest") { ... }

    next();
}