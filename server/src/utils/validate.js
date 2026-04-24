export function isTikTokUrl(url) {
    try {
        let u = new URL(url);

        return (
            ["www.tiktok.com", "m.tiktok.com", "vt.tiktok.com"].includes(u.hostname) &&
            (u.pathname.includes("/video/") || u.pathname.includes("/photo/"))
        );
    } catch {
        return false;
    }
}