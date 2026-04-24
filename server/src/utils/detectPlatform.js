export function detectPlatform(url) {
    try {
        let u = new URL(url);
        let host = u.hostname.replace("www.", "");

        if (host.includes("tiktok.com")) return "tiktok";
        if (host.includes("facebook.com") || host.includes("fb.watch")) return "facebook";
        if (host.includes("instagram.com")) return "instagram";
        if (host.includes("pinterest.com") || host.includes("pin.it")) return "pinterest";

        return "unknown";
    } catch {
        return "unknown";
    }
}