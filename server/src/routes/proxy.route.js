// server/src/routes/proxy.route.js
import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/proxy", async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).send("Missing url");
    }

    try {
        const response = await axios.get(url, {
            responseType: "stream",
            timeout: 15000,
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36",
                "Referer": "https://www.instagram.com/",
                "Origin": "https://www.instagram.com",
                "Accept":
                    "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.9",
                "Connection": "keep-alive"
            },
            validateStatus: (s) => s >= 200 && s < 500, // để bắt log 403/302
        });

        // Debug nhanh nếu IG trả 403/302
        if (response.status !== 200) {
            console.log("IG PROXY STATUS:", response.status);
        }

        res.setHeader(
            "Content-Type",
            response.headers["content-type"] || "image/jpeg"
        );

        response.data.pipe(res);
    } catch (err) {
        console.log("PROXY ERROR:", err.message);
        res.status(500).send("Proxy failed");
    }
});

export default router;