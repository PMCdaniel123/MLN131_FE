import axios from "axios";

const BASE_URL = import.meta.env.REACT_APP_GEMINI_API_URL;
const API_KEY = import.meta.env.REACT_APP_GEMINI_API_KEY;

const geminiAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-GEMINI-APIKEY": API_KEY,
  },
});

export const fetchMarketData = async () => {
  try {
    const response = await geminiAPI.get("/v1/symbols");
    return response.data;
  } catch (error) {
    console.error("Error fetching market data:", error);
    throw error;
  }
};

export default geminiAPI;
