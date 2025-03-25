import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const axiosInstance = axios.create({
  baseURL: `${API_URL}/api/products`,
  headers: {
    "Content-Type": "application/json",
  },
})

export const searchProducts = async (query) => {
    const response = await axiosInstance.get("/search", {
      params: { q: query },
    });
    return response.data
}