"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import API from "@/app/lib/api";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await API.get("/user/profile", { withCredentials: true });
        router.push("/user-dashboard");
      } catch {}
    };
    checkUser();
  }, [router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/user/register", form);
      router.push("/login");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        <input
          placeholder="Name"
          className="border p-3 w-full mb-3"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="border p-3 w-full mb-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <select
          className="border p-3 w-full mb-4"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <button className="bg-blue-600 text-white w-full p-3 rounded">
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
}