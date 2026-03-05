"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  LayoutDashboard,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <BookOpen size={26} />
          StudyWeb
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            <LogIn size={18} />
            Login
          </Link>

          <Link
            href="/register"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow transition"
          >
            <UserPlus size={18} />
            Register
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

          <Link
            href="/"
            className="block hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="block hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            href="/login"
            className="block text-blue-600 font-medium"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
  href="/register"
  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold 
  shadow-lg shadow-blue-500/30 
  hover:shadow-xl hover:shadow-blue-600/40 
  hover:scale-105 transition-all duration-300"
>
  Start Free Now
</Link>

        </div>
      )}
    </nav>
  );
}