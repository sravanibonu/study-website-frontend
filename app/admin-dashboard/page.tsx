"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/app/lib/api";

export default function AdminDashboard() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [tests, setTests] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 🔐 Admin protect
  useEffect(() => {
    const check = async () => {
      try {
        const { data } = await API.get("/user/profile");

        const role = data?.role || data?.user?.role;

        if (role !== "admin") {
          router.replace("/login");
        }
      } catch {
        router.replace("/login");
      }
    };

    check();
  }, [router]);

  // 🔄 Load tests
  const loadTests = async () => {
    try {
      const { data } = await API.get("/tests");
      setTests(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTests();
  }, []);

  // ➕ Create / Update
  const handleSave = async () => {
    if (!title) return alert("Enter test title");

    try {
      if (editId) {
        await API.put(`/test/${editId}`, { title });
      } else {
        await API.post("/test/create", { title });
      }

      setTitle("");
      setEditId(null);
      loadTests();
    } catch {
      alert("Error saving test");
    }
  };

  // ❌ Delete
  const handleDelete = async (id: string) => {
    if (!confirm("Delete test?")) return;

    try {
      await API.delete(`/test/${id}`);
      loadTests();
    } catch {
      alert("Delete failed");
    }
  };

  // ✏️ Edit
  const handleEdit = (test: any) => {
    setTitle(test.title);
    setEditId(test._id);
  };

  // 🚪 Logout
  const handleLogout = async () => {
    await API.post("/user/logout");
    localStorage.removeItem("role");
    router.replace("/login");
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 space-y-3">
        <h2 className="font-bold text-lg">Admin Panel</h2>

        <button
          onClick={() => router.push("/admin-dashboard")}
          className="bg-white p-3 w-full rounded"
        >
          Dashboard
        </button>

        <button
          onClick={() => {
            if (tests.length > 0) {
              router.push(`/admin-dashboard/${tests[0]._id}`);
            }
          }}
          className="bg-white p-3 w-full rounded"
        >
          Questions
        </button>
      </div>

      {/* Content */}
      <div className="w-3/4 p-6">

        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">
            {editId ? "Edit Test" : "Create Test"}
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {/* Input */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Test Title"
          className="w-full border p-2 mb-4"
        />

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
          {editId ? "Update" : "Create"}
        </button>

        {/* List */}
        {tests.map((t) => (
          <div key={t._id} className="border p-3 mb-2 flex justify-between">
            <span>{t.title}</span>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  router.push(`/admin-dashboard/${t._id}`)
                }
                className="bg-green-500 text-white px-2"
              >
                Questions
              </button>

              <button
                onClick={() => handleEdit(t)}
                className="bg-yellow-500 px-2"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(t._id)}
                className="bg-red-500 text-white px-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}