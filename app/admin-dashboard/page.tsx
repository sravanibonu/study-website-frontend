"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import API from "@/app/lib/api";

export default function AdminDashboard() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [tests, setTests] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  // ✅ PROTECT ADMIN (FIXED ROLE CHECK)
  useEffect(() => {
    const check = async () => {
      try {
        const { data } = await API.get("/user/profile");

        console.log("PROFILE:", data);

        // ✅ FIX HERE
        const role = data?.role || data?.user?.role;

        if (role !== "admin") {
          router.replace("/login");
        }
      } catch {
        router.replace("/login");
      }
    };

    check();
  }, []);

  // ✅ LOAD TESTS
  const loadTests = async () => {
    try {
      const { data } = await API.get("/tests");
      setTests(data);
    } catch (err) {
      console.error("Error loading tests", err);
    }
  };

  useEffect(() => {
    loadTests();
  }, []);

  // ✅ CREATE / UPDATE TEST
  const handleSave = async () => {
    if (!title) return alert("Enter test title");

    try {
      if (editId) {
        await API.put(`/test/${editId}`, { title });
        alert("Test Updated ✅");
      } else {
        await API.post("/test/create", { title });
        alert("Test Created ✅");
      }

      setTitle("");
      setEditId(null);
      loadTests();
    } catch {
      alert("Error saving test");
    }
  };

  // ❌ DELETE TEST
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this test?")) return;

    try {
      await API.delete(`/test/${id}`);
      loadTests();
    } catch {
      alert("Error deleting test");
    }
  };

  // ✏️ EDIT CLICK
  const handleEdit = (test: any) => {
    setTitle(test.title);
    setEditId(test._id);
  };

  // 🚪 LOGOUT
  const handleLogout = async () => {
    try {
      await API.post("/user/logout");
    } catch {}
    router.replace("/login");
  };

  return (
    <div className="flex min-h-screen">

      {/* LEFT MENU */}
      <div className="w-1/4 bg-gray-100 p-4 space-y-4">
        <h2 className="font-bold text-lg mb-4">Admin Panel</h2>

        <button
          onClick={() => router.push("/admin-dashboard")}
          className="bg-white p-3 rounded shadow w-full text-left hover:bg-gray-200"
        >
          Dashboard
        </button>

        <button
          onClick={() => {
            if (tests.length > 0) {
              router.push(`/admin-dashboard/${tests[0]._id}`);
            }
          }}
          className="bg-white p-3 rounded shadow w-full text-left hover:bg-gray-200"
        >
          Create Questions
        </button>

        <button className="bg-white p-3 rounded shadow w-full text-left hover:bg-gray-200">
          Grading
        </button>

        <button className="bg-white p-3 rounded shadow w-full text-left hover:bg-gray-200">
          Test Sections
        </button>

        <button className="bg-white p-3 rounded shadow w-full text-left hover:bg-gray-200">
          Import Questions
        </button>

        <button className="bg-white p-3 rounded shadow w-full text-left hover:bg-gray-200">
          Test Settings
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-3/4 p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">

          <div className="flex items-center gap-3">
            <span className="bg-black text-white px-3 py-1 rounded">
              Admin
            </span>

            <h1 className="text-2xl font-bold">
              {editId ? "Edit Test" : "Create Test"}
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {/* INPUT */}
        <input
          type="text"
          placeholder="Enter Test Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />

        {/* SAVE BUTTON */}
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
          {editId ? "Update Test" : "Create Test"}
        </button>

        {/* TEST LIST */}
        <h2 className="text-xl font-semibold mb-3">All Tests</h2>

        <div className="space-y-3">
          {tests.map((test) => (
            <div
              key={test._id}
              className="border p-3 rounded flex justify-between items-center"
            >
              <span>{test.title}</span>

              <div className="flex gap-2">

                <button
                  onClick={() =>
                    router.push(`/admin-dashboard/${test._id}`)
                  }
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Questions
                </button>

                <button
                  onClick={() => handleEdit(test)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(test._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}