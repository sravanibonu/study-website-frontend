import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // cookies support (if backend uses it)
});

// ✅ REQUEST INTERCEPTOR (VERY IMPORTANT)
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    // 🔥 Add token if exists
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ RESPONSE INTERCEPTOR (optional but useful)
API.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log("API Error:", error?.response?.data || error.message);

    // 🔥 If unauthorized → redirect to login
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");

      // optional redirect
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default API;