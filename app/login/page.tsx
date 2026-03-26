"use client";

import API from "@/app/lib/api";
import { useState, useEffect } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // ✅ Auto login check
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await API.get("/user/profile");

        console.log("Profile:", data); // 🔥 debug

        const role = data?.role || data?.user?.role;

        if (role === "admin") {
          router.push("/admin-dashboard");
        } else if (role === "user") {
          router.push("/user-dashboard");
        }
      } catch {
        // not logged in
      }
    };

    checkUser();
  }, [router]);

  const handleLogin = async (e: any) => {
    e.preventDefault(); // 🔥 IMPORTANT

    try {
      const res = await API.post("/user/login", {
        email,
        password,
      });

      const data = res.data;

      console.log("Login:", data); // 🔥 debug

      const role = data?.role || data?.user?.role;

      // ✅ FIX: correct role check
      if (role === "admin") {
        router.push("/admin-dashboard");
      } else if (role === "user") {
        router.push("/user-dashboard");
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
        onSubmit={handleLogin}  // 🔥 form submit
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Login
        </h2>

        {/* Email */}
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

        {/* Password */}
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

        {/* Button */}
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