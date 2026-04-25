import ytdlp from "yt-dlp-exec";

export async function getFacebook(url) {
    try {
        const data = await ytdlp(url, {
            dumpSingleJson: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: [
                "referer:facebook.com",
                "user-agent:Mozilla/5.0"
            ]
        });

        // video
        const videoUrl =
            data.url ||
            data.formats?.find(f => f.ext === "mp4")?.url;

        if (!videoUrl) {
            throw new Error("No video found");
        }

        return {
            type: "video",
            video: videoUrl,
            images: [],
            music: null,
            author: data.uploader || "Facebook",
            title: data.title || "FB Video",
            cover: data.thumbnail || null,
            duration: data.duration || 0
        };

    } catch (err) {
        console.log("FB ERROR:", err.message);
        throw new Error("Facebook fetch failed");
    }
}