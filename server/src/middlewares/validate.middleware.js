import { isTikTokUrl } from "../utils/validate.js";

export function validateByPlatform(req, res, next) {
    let { url } = req.body;
    let platform = req.platform;

    if (platform === "tiktok") {
        if (!isTikTokUrl(url)) {
            return res.status(400).json({
                success: false,
                message: "Invalid TikTok URL"
            });
        }
    }

    // thêm sau
    // if (platform === "facebook") { ... }
    // if (platform === "instagram") { ... }
    // if (platform === "pinterest") { ... }

    next();
}