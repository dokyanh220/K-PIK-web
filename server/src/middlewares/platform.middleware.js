import { detectPlatform } from "../utils/detectPlatform.js";

export function detectPlatformMiddleware(req, res, next) {
    let { url } = req.body;

    let platform = detectPlatform(url);

    if (platform === "unknown") {
        return res.status(400).json({
            success: false,
            message: "Unsupported platform"
        });
    }

    req.platform = platform;
    next();
}