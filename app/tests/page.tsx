"use client";

import { Search, FileText, Clock, Trophy } from "lucide-react";
import Link from "next/link";

export default function TestsPage() {
  const tests = [
    {
      title: "SSC CGL Mock Test",
      questions: 100,
      duration: "60 mins",
    },
    {
      title: "Bank PO Practice Test",
      questions: 80,
      duration: "45 mins",
    },
    {
      title: "UPSC Prelims Mock",
      questions: 120,
      duration: "2 hours",
    },
    {
      title: "Railway NTPC Test",
      questions: 90,
      duration: "60 mins",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      {/* Page Title */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-4">Practice Tests</h1>
        <p className="text-gray-600">
          Attempt mock tests and track your performance.
        </p>

        {/* Search */}
        <div className="mt-6 flex items-center bg-white border rounded-lg px-4 py-3 shadow-sm">
          <Search className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search tests..."
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Tests Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {tests.map((test, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold mb-4">{test.title}</h3>

            <div className="space-y-2 text-gray-600 mb-6">

              <p className="flex items-center gap-2">
                <FileText size={18} />
                {test.questions} Questions
              </p>

              <p className="flex items-center gap-2">
                <Clock size={18} />
                {test.duration}
              </p>

              <p className="flex items-center gap-2">
                <Trophy size={18} />
                Rank & Analysis
              </p>

            </div>

            <Link
              href="/login"
              className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Attempt Test
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
}