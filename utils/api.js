export const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const fetchAPI = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_BASE}${url}`, {
      method: options.method || "GET", // ✅ default GET but override possible
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined, // ✅ auto stringify
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "API Error");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};