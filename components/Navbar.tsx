"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/100 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Quizaro Logo"
          width={150}
          height={50}
          className="h-10 w-auto"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/tests" className="hover:text-blue-600 transition">
            Tests
          </Link>

          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">

          <Link
            href="/login"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-300 transition duration-300"
          >
            Register
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-8 pb-6 space-y-4 font-medium">

          <Link href="/" className="block hover:text-blue-600">
            Home
          </Link>

          <Link href="/tests" className="block hover:text-blue-600">
            Tests
          </Link>

          <Link href="/about" className="block hover:text-blue-600">
            About
          </Link>

          <Link href="/contact" className="block hover:text-blue-600">
            Contact
          </Link>

          <div className="flex gap-3 pt-4">
            <Link
              href="/login"
              className="w-full text-center px-4 py-2 rounded-lg border border-blue-600 text-blue-600"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="w-full text-center px-4 py-2 rounded-lg bg-blue-600 text-white"
            >
              Register
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
}