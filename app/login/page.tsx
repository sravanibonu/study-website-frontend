"use client";
import { fetchAPI } from "@/utils/api";
import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
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
      router.push("/home");
    }

  } catch (err) {
    console.log(err);
  }
};
  };

  return (

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

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
            />
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <LogIn size={18} />
            Login
          </button>

        </div>
      </div>
  );
}