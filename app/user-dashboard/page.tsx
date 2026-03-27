"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/app/lib/api";

export default function UserDashboard() {
  const router = useRouter();

  const [availableTests, setAvailableTests] = useState<any[]>([]);
  const [purchasedTests, setPurchasedTests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔐 Protect user
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await API.get("/user/profile", {
          withCredentials: true,
        });

        const role = data?.role || data?.user?.role;

        if (role !== "user") {
          router.replace("/login");
        }
      } catch {
        router.replace("/login");
      }
    };

    checkUser();
  }, [router]);

  // 🔄 Load tests (NEW APIs)
  useEffect(() => {
    const loadData = async () => {
      try {
        const [availableRes, purchasedRes] = await Promise.all([
          API.get("/user/tests/available", { withCredentials: true }),
          API.get("/user/tests/purchased", { withCredentials: true }),
        ]);

        setAvailableTests(availableRes.data);
        setPurchasedTests(purchasedRes.data);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // 🛒 Purchase test
  const handlePurchase = async (testId: string) => {
    try {
      await API.post(
        `/test/purchase/${testId}`,
        {},
        { withCredentials: true }
      );

      alert("Test Purchased ✅");

      // reload data
      location.reload();

    } catch {
      alert("Purchase failed ❌");
    }
  };

  // 🚪 Logout
  const handleLogout = async () => {
    await API.post("/user/logout", {}, { withCredentials: true });
    localStorage.removeItem("role");
    router.push("/login");
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">User Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Available Tests */}
      <h2 className="text-xl font-semibold mb-3">Available Tests</h2>

      {availableTests.length === 0 && (
        <p className="text-gray-500">No tests available</p>
      )}

      <div className="space-y-3">
        {availableTests.map((test) => (
          <div
            key={test._id}
            className="border p-4 rounded flex justify-between"
          >
            <span>{test.title}</span>

            <button
              onClick={() => handlePurchase(test._id)}
              className="bg-yellow-500 px-3 py-1 rounded"
            >
              Purchase
            </button>
          </div>
        ))}
      </div>

      {/* Purchased Tests */}
      <h2 className="text-xl font-semibold mt-6 mb-3">My Tests</h2>

      {purchasedTests.length === 0 && (
        <p className="text-gray-500">No purchased tests</p>
      )}

      <div className="space-y-3">
        {purchasedTests.map((test) => (
          <div
            key={test._id}
            className="border p-4 rounded flex justify-between"
          >
            <span>{test.title}</span>

            <button
              onClick={() => router.push(`/quiz/${test._id}`)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Start
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}