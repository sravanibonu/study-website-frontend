import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

API.interceptors.request.use(
  (req) => req,
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log("API Error:", error?.response?.data || error.message);

    if (error?.response?.status === 401) {
      localStorage.removeItem("role");
    }

    return Promise.reject(error);
  }
);

export default API;