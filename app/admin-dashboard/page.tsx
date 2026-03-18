"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import API from "@/app/lib/api";

export default function AdminDashboard() {
  const router = useRouter();
  const [tests, setTests] = useState<any[]>([]);

  const fetchTests = async () => {
    const res = await API.get("/tests");
    setTests(res.data);
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const handleLogout = async () => {
    await API.post("/user/logout");
    router.push("/");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">My Library</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2"
        >
          Logout
        </button>
      </div>

      {/* FOLDERS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 text-center">📁 Free Materials</div>
        <div className="bg-white p-6 text-center">📁 Topic Tests</div>
        <div className="bg-white p-6 text-center">📁 Sectional</div>
        <div className="bg-white p-6 text-center">📁 Full Tests</div>
      </div>

      {/* TEST LIST */}
      {tests.map((t: any) => (
        <div
          key={t._id}
          className="bg-white p-4 mb-2 flex justify-between"
        >
          <p>{t.title}</p>

          <button
            onClick={() => router.push(`/admin-dashboard/${t._id}`)}
            className="bg-blue-500 text-white px-3"
          >
            Open
          </button>
        </div>
      ))}

    </div>
  );
}