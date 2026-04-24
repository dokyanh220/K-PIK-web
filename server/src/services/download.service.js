import axios from "axios"
import pkg from "@tobyg74/tiktok-api-dl"
let { TiktokDL } = pkg

export async function getData(url) {

    // nguồn chính
    try {
        let res = await TiktokDL(url)

        if (res.status === "success") {
            let d = res.result

            // Dạng video
            if (d.video && d.video.length > 0) {
                return {
                    type: "video",
                    video: d.video[0],
                    music: d.music,
                    author: d.author?.nickname,
                    title: d.desc
                }
            }

            // Dạng ảnh
            if (d.images && d.images.length > 0) {
                return {
                    type: "image",
                    images: d.images,
                    music: d.music,
                    author: d.author?.nickname,
                    title: d.desc
                }
            }
        }
    } catch (err) {
        console.log("Primary failed...")
    }

    // fallback
    try {
        let res = await axios.get("https://tikwm.com/api/", {
            params: { url },
            timeout: 5000
        })

        let d = res.data.data

        // Dạng ảnh (ưu tiên check ảnh trước vì API đôi khi trả về play rỗng hoặc kèm ảnh)
        if (d.images && d.images.length > 0) {
            return {
                type: "image",
                images: d.images,
                music: d.music,
                author: d.author?.nickname,
                title: d.title,
                cover: d.cover,
                duration: d.duration
            }
        }

        // Dạng video
        if (d.play) {
            return {
                type: "video",
                video: d.play,
                music: d.music,
                author: d.author?.nickname,
                title: d.title,
                cover: d.cover,
                duration: d.duration
            }
        }

    } catch (err) {
        console.error("All providers failed")
        throw new Error("Download failed")
    }
}