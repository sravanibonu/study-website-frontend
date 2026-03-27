import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // ✅ cookies support
});

// ✅ REQUEST INTERCEPTOR
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    // 🔥 Add token if exists
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => Promise.reject(error)
);

// ✅ RESPONSE INTERCEPTOR (FIXED 🚀)
API.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log("API Error:", error?.response?.data || error.message);

    // 🔥 Handle unauthorized (NO redirect here ❌)
    if (error?.response?.status === 401) {
      console.warn("Unauthorized - clearing session");

      // clear storage
      localStorage.removeItem("token");
      localStorage.removeItem("role");

      // ❌ DO NOT redirect here (causes infinite loop)
    }

    return Promise.reject(error);
  }
);

export default API;