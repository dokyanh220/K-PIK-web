import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getDataTikTok = async (url) => {
    try {
        const res = await axios.post(`${API_URL}/download`, { url });
        return res.data.data;
    } catch (err) {
        throw err.response?.data || err.message;
    }
};