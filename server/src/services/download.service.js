import { getTikTok } from "./providers/tiktok.provider.js";
import { getInstagram } from "./providers/instagram.provider.js";

export async function getData(url, platform) {

    if (platform === "tiktok") {
        return await getTikTok(url);
    }

    if (platform === "instagram") {
        return await getInstagram(url);
    }

    throw new Error("Unsupported platform");
}