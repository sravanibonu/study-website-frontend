"use client";

import API from "@/app/lib/api";
import { useState, useEffect } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // ✅ Auto login check (NO API → NO BLINKING)
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "admin") {
      router.replace("/admin/dashboard");
    } else if (role === "user") {
      router.replace("/dashboard");
    }
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const res = await API.post("/user/login", {
        email,
        password,
      });

      const data = res.data;
      console.log("Login:", data);

      // ✅ Save token
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // ✅ Get correct role
      const role = data?.role || data?.user?.role;

      if (role) {
        localStorage.setItem("role", role);
      }

      // ✅ SAFE REDIRECT (NO LOOP)
      if (role === "admin") {
        router.replace("/admin/dashboard");
      } else if (role === "user") {
        router.replace("/dashboard");
      } else {
        alert("Role not found");
      }

    } catch (err: any) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Login
        </h2>

        <div className="flex items-center border rounded-lg mb-4 px-3">
          <Mail className="text-gray-400 mr-2" size={20} />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center border rounded-lg mb-6 px-3">
          <Lock className="text-gray-400 mr-2" size={20} />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <LogIn size={18} />
          Login
        </button>
      </form>
    </div>
  );
}