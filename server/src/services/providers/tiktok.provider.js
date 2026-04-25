import pkg from "@tobyg74/tiktok-api-dl";

const { Downloader } = pkg;

export async function getTikTok(url) {
    const res = await Downloader(url);

    if (res.status !== "success") {
        throw new Error("TikTok fetch failed");
    }

    const d = res.result;

    // slideshow
    if (Array.isArray(d.images) && d.images.length > 0) {
        return {
            type: "image",
            images: d.images,
            video: null,
            music: d.music?.playUrl?.[0] || null,
            author: d.author?.nickname,
            title: d.desc,
            cover: d.images[0]
        };
    }

    // video
    let videoUrl = null;

    if (Array.isArray(d.video?.downloadAddr) && d.video.downloadAddr.length > 0) {
        videoUrl = d.video.downloadAddr[0];
    } else if (Array.isArray(d.video?.playAddr) && d.video.playAddr.length > 0) {
        videoUrl = d.video.playAddr[0];
    } else if (typeof d.video === "string") {
        videoUrl = d.video;
    }

    if (videoUrl) {
        return {
            type: "video",
            video: videoUrl,
            images: [],
            music: d.music?.playUrl?.[0] || null,
            author: d.author?.nickname,
            title: d.desc,
            cover: d.video?.cover?.[0] || null,
            duration: d.video?.duration || 0
        };
    }
    throw new Error("Unknown TikTok format");
}