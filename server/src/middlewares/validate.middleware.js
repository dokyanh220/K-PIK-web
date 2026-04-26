import { detectAndValidateUrl } from "../utils/validate.js";

/**
 * Middleware tổng quát để validate URL và xác định platform.
 * Nó sẽ kiểm tra URL có hợp lệ không và gán platform vào req.platform.
 */
export function validateUrlMiddleware(req, res, next) {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            success: false,
            message: "URL is required"
        });
    }

    const result = detectAndValidateUrl(url);

    if (!result.valid) {
        return res.status(400).json({
            success: false,
            message: "Invalid URL or unsupported platform"
        });
    }

    // Gán platform vào request để các controller/service sử dụng
    req.platform = result.platform;
    next();
}