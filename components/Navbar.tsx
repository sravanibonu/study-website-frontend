"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow sticky top-0 bg-white z-50">
      <h1 onClick={() => scrollToSection("home")} className="cursor-pointer font-bold text-blue-600">
        Quizaro
      </h1>

      <div className="flex gap-6 items-center">
        <span onClick={() => scrollToSection("home")}>Home</span>
        <span onClick={() => scrollToSection("tests")}>Tests</span>
        <span onClick={() => scrollToSection("about")}>About</span>
        <span onClick={() => scrollToSection("contact")}>Contact</span>

        <button onClick={() => router.push("/admin-dashboard")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Admin
        </button>

        <button onClick={() => router.push("/login")} className="border px-4 py-2 rounded">
          Login
        </button>

        <button onClick={() => router.push("/register")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </div>
    </nav>
  );
}