"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">StudyWeb</h1>

      <div className="space-x-6 hidden md:block">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      </div>

      <div className="space-x-4">
        <Link
          href="/login"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}