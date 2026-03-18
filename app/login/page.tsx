"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import API from "@/app/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isAdmin = searchParams.get("role") === "admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/user/login", {
        email,
        password,
      });

      if (res.data.role === "admin" || isAdmin) {
        router.push("/admin-dashboard");
      } else {
        router.push("/user-dashboard");
      }

    } catch {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="bg-white p-6 shadow rounded w-80">

        <h2 className="text-xl mb-4 text-center">
          {isAdmin ? "Admin Login" : "User Login"}
        </h2>

        <input
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full p-2"
        >
          Login
        </button>

      </div>
    </div>
  );
}