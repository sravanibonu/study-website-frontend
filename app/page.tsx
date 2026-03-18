"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BookOpen, Target, Trophy, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  const handleTestClick = () => {
    router.push("/quiz"); // same as your old logic
  };

  return (
    <div>

      {/* HOME */}
      <section id="home" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          Crack Competitive Exams With Smart Practice
        </h1>

        <button
          onClick={() => router.push("/register")}
          className="bg-white text-blue-600 px-6 py-2 rounded"
        >
          Start Free Now
        </button>
      </section>

      {/* TESTS */}
      <section id="tests" className="py-20 px-6">
        <h2 className="text-3xl text-center mb-10">Practice Tests</h2>

        <div className="max-w-3xl mx-auto space-y-4">

          <div className="border p-4 cursor-pointer" onClick={() => setActive("topic")}>
            📁 Topic Tests
          </div>

          {active === "topic" && (
            <div className="space-y-2">
              <div onClick={handleTestClick} className="border p-2">Quantitative Aptitude</div>
              <div onClick={handleTestClick} className="border p-2">Reasoning</div>
            </div>
          )}

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 text-center bg-gray-100">
        <h2 className="text-4xl font-bold">About StudyWeb</h2>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center bg-gray-200">
        <p><Mail /> support@studyweb.com</p>
        <p><Phone /> +91 98765 43210</p>
        <p><MapPin /> India</p>
      </section>

    </div>
  );
}