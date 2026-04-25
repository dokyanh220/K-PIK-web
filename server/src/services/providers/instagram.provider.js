import { instagramGetUrl } from "instagram-url-direct";

export async function getInstagram(url) {
    try {
        const res = await instagramGetUrl(url);

        console.log("IG RAW:", res);

        const urls = res?.url_list || [];

        if (!urls.length) {
            throw new Error("No media found");
        }

        // tách ảnh và video
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

        // video
        if (videos.length > 0 && images.length === 0) {
            return {
                type: "video",
                video: videos[0],
                images: [],
                music: null,
                author: "Instagram",
                title: "IG Video",
                duration: videos,
                cover: videos[0]
            };
        }

        // album (>= 1 ảnh)
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

        if (videos.length > 0 && images.length > 0) {
            return {
                type: "carousel",
                items: urls.map(u => ({
                    type: u.includes(".mp4") ? "video" : "image",
                    url: u
                })),
                duration: 0,
                cover: images[0] || videos[0]
            };
        }

        throw new Error("Unknown IG format");

    } catch (err) {
        console.log("IG ERROR:", err.message);
        throw new Error("Instagram fetch failed");
    }
}