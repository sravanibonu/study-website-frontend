"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">

      {/* LOGO */}
      <h1 className="text-2xl font-bold text-blue-600">
        StudyWeb
      </h1>

      {/* LINKS */}
      <div className="space-x-6 hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/tests">Tests</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* AUTH */}
      <div className="space-x-4">

        {/* 🔥 ADMIN BUTTON ADDED */}
        <Link
          href="/admin-dashboard"
          className="px-3 py-1 bg-black text-white rounded"
        >
          Admin
        </Link>

        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>

    </nav>
  );
}