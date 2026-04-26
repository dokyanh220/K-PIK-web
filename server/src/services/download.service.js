import { getTikTok } from "./providers/tiktok.provider.js";
import { getInstagram } from "./providers/instagram.provider.js";

import { getFacebook } from "./providers/facebook.provider.js";
import { getYoutube } from "./providers/youtube.provider.js";

const providers = {
    tiktok: getTikTok,
    instagram: getInstagram,
    facebook: getFacebook,
    youtube: getYoutube
};

export async function getData(url, platform) {
    const fn = providers[platform];

    if (!fn) throw new Error("Unsupported platform");

    return await fn(url);
}