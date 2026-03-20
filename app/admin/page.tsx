"use client";
import { fetchAPI } from "@/utils/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const handleLogin = async () => {
  try {
    const data = await fetchAPI("/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (data.role === "admin") {
      router.push("/admin-dashboard");
    } else {
      alert("Not an admin");
    }

  } catch (err) {
    console.log(err);
  }
};
  };

  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-80">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Admin Login
          </h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login as Admin
          </button>

        </div>
      </div>
  );
}