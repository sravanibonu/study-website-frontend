"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">

      <button
        onClick={() => router.push("/login")}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        User Login
      </button>

      <button
        onClick={() => router.push("/register")}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Register as User
      </button>

      <button
        onClick={() => router.push("/login?role=admin")}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Admin Login
      </button>

    </div>
  );
}