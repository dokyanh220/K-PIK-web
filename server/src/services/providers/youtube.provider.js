import ytdlp from "yt-dlp-exec";

export async function getYoutube(url) {
    try {
        const data = await ytdlp(url, {
            dumpSingleJson: true,
            noWarnings: true,
            preferFreeFormats: true,
            addHeader: [
                "referer:youtube.com",
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

        // music
        const music = 
            data.formats?.find(f => f.format_id === "140")?.url || // m4a
            data.formats?.find(f => f.acodec !== "none" && f.vcodec === "none")?.url; // any audio only format

        return {
            type: "video",
            video: videoUrl,
            images: [],
            music: null || music,
            author: data.uploader || "Youtube",
            title: data.title || "Youtube Video",
            cover: data.thumbnail || null,
            duration: data.duration || 0
        };

    } catch (err) {
        console.log("YT ERROR:", err.message);
        throw new Error("Youtube fetch failed");
    }
}