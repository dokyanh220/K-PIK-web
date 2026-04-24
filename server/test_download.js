import axios from "axios";

async function run() {
    console.log("Testing tikwm directly...");
    try {
        let res = await axios.get("https://tikwm.com/api/", {
            params: { url: "https://www.tiktok.com/@tiktok/video/7106594312292453675" },
            timeout: 5000
        });
        console.log("Fallback result data:", res.data);
    } catch (e) {
        console.error(e);
    }
}
run();
