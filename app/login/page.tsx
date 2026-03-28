"use client";

import API from "@/app/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/user/login",
        { email, password },
        { withCredentials: true }
      );

      let role = res.data?.role || res.data?.user?.role;
      role = role?.toLowerCase();

      if (role === "admin") {
        router.replace("/admin-dashboard");
      } else {
        router.replace("/user-dashboard");
      }

    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="bg-white p-8 shadow w-96">
        <input
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white w-full p-2">
          Login
        </button>
      </form>
    </div>
  );
}