import axios from "axios";

const API = axios.create({
  baseURL: "https://quizaro-backend-3fkj.onrender.com",
});


API.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }
  return req;
});

export default API;