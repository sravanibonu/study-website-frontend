"use client";

import Navbar from "@/components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-3xl mt-2 text-blue-600">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Total Quizzes</h2>
            <p className="text-3xl mt-2 text-green-600">45</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Active Users</h2>
            <p className="text-3xl mt-2 text-purple-600">30</p>
          </div>

        </div>

      </div>
    </div>
  );
}