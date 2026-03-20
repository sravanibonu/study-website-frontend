"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import API from "@/app/lib/api";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  token: string;
}

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data } = await API.post<RegisterResponse>(
  "/api/user/register", // ✅ FIXED
  form
      );

      if (data?.token) {
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        setError("Invalid server response");
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        err?.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 shadow-2xl rounded-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Create Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 mb-4 rounded text-sm">
            {error}
          </div>
        )}

        <div className="flex items-center border rounded-lg mb-4 px-3">
          <User className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 outline-none"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        <div className="flex items-center border rounded-lg mb-4 px-3">
          <Mail className="text-gray-400 mr-2" size={20} />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 outline-none"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <div className="flex items-center border rounded-lg mb-6 px-3">
          <Lock className="text-gray-400 mr-2" size={20} />
          <input
            type="password"
            placeholder="Password"
            required
            minLength={6}
            className="w-full p-3 outline-none"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition disabled:opacity-50"
        >
          <UserPlus size={18} />
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}