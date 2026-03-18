import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // ✅ VERY IMPORTANT (for cookies)
});

// Optional: request interceptor (not mandatory but safe)
API.interceptors.request.use((req) => {
  return req;
});

// Optional: response interceptor
API.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log("API Error:", error);
    return Promise.reject(error);
  }
);

export default API;