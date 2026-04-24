export function detectAndValidateUrl(url) {
    try {
        const u = new URL(url);
        const host = u.hostname.replace("www.", "");

        // 🎬 TikTok
        if (
            ["tiktok.com", "m.tiktok.com", "vt.tiktok.com"].includes(host) &&
            (u.pathname.includes("/video/") || u.pathname.includes("/photo/"))
        ) {
            return { valid: true, platform: "tiktok" };
        }

        // 📸 Instagram
        if (
            ["instagram.com"].includes(host) &&
            (
                u.pathname.includes("/reel/") ||
                u.pathname.includes("/p/") ||
                u.pathname.includes("/tv/")
            )
        ) {
            return { valid: true, platform: "instagram" };
        }

        // 📘 Facebook
        if (
            ["facebook.com", "m.facebook.com", "fb.watch"].includes(host)
        ) {
            return { valid: true, platform: "facebook" };
        }

        // 📌 Pinterest
        if (
            ["pinterest.com", "pin.it"].includes(host)
        ) {
            return { valid: true, platform: "pinterest" };
        }

        return { valid: false, platform: null };

    } catch (err) {
        return { valid: false, platform: null };
    }
}