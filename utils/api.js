export const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const fetchAPI = async (url, options = {}) => {
  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  return res.json();
};