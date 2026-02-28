"use client";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
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

  // Redirect if already logged in
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
        "/user/register",
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
        err.response?.data?.message ||
          err.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-xl w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full mb-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full mb-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          minLength={6}
          className="w-full mb-5 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded transition duration-200 disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>
      </form>
    </div>
  );
}