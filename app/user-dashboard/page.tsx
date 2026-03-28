"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/app/lib/api";

export default function UserDashboard() {
  const router = useRouter();

  const [available, setAvailable] = useState<any[]>([]);
  const [purchased, setPurchased] = useState<any[]>([]);

  useEffect(() => {
    const check = async () => {
      try {
        const { data } = await API.get("/user/profile", {
          withCredentials: true,
        });

        const role = (data?.role || data?.user?.role)?.toLowerCase();

        if (role !== "student") {
          router.replace("/login");
        }
      } catch {
        router.replace("/login");
      }
    };

    check();
  }, [router]);

  useEffect(() => {
    const load = async () => {
      const a = await API.get("/user/tests/available", { withCredentials: true });
      const p = await API.get("/user/tests/purchased", { withCredentials: true });

      setAvailable(a.data);
      setPurchased(p.data);
    };

    load();
  }, []);

  const logout = async () => {
    await API.post("/user/logout", {}, { withCredentials: true });
    router.push("/login");
  };

  return (
    <div className="p-6">
      <button onClick={logout} className="bg-red-500 text-white p-2 mb-4">
        Logout
      </button>

      <h2>Available Tests</h2>
      {available.map((t) => (
        <div key={t._id}>{t.title}</div>
      ))}

      <h2>My Tests</h2>
      {purchased.map((t) => (
        <div key={t._id}>{t.title}</div>
      ))}
    </div>
  );
}