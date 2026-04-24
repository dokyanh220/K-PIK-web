import { instagramGetUrl } from "instagram-url-direct";

export async function getInstagram(url) {
    try {
        const res = await instagramGetUrl(url);

        console.log("IG RAW:", res);

        const urls = res?.url_list || [];

        if (!urls.length) {
            throw new Error("No media found");
        }

        // 🔥 phân loại
        const images = urls.filter(u =>
            u.includes(".jpg") ||
            u.includes(".jpeg") ||
            u.includes(".webp") ||
            u.includes("image")
        );

        const videos = urls.filter(u =>
            u.includes(".mp4") ||
            u.includes("video")
        );

        // 🎬 Ưu tiên trả về video nếu có (kèm cover là ảnh đầu tiên)
        if (videos.length > 0) {
            return {
                type: "video",
                video: videos[0],
                images: images,
                music: null,
                author: "Instagram",
                title: "IG Video",
                duration: 0,
                cover: images.length > 0 ? images[0] : null
            };
        }

        // 🖼️ Nếu chỉ có ảnh (Album)
        if (images.length > 0) {
            return {
                type: "image",
                images: images,
                video: null,
                music: null,
                author: "Instagram",
                title: "IG Images",
                duration: 0,
                cover: images[0]
            };
        }

        throw new Error("Unknown IG format");

    } catch (err) {
        console.log("IG ERROR:", err.message);
        throw new Error("Instagram fetch failed");
    }
}