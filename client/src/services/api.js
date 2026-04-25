import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getDataTikTok = async (url) => {
    try {
        const res = await axios.post(`${API_URL}/download/tiktok`, { url });
        return res.data.data;
    } catch (err) {
        throw err.response?.data || err.message;
    }
};

export const getDataInstagram = async (url) => {
    try {
        const res = await axios.post(`${API_URL}/download/instagram`, { url });
        return res.data.data;
    } catch (err) {
        throw err.response?.data || err.message;
    }
};

export const getDataFacebook = async (url) => {
    try {
        const res = await axios.post(`${API_URL}/download/facebook`, { url });
        return res.data.data;
    } catch (err) {
        throw err.response?.data || err.message;
    }
};