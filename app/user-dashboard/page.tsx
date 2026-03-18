"use client";

import { useRouter } from "next/navigation";
import API from "@/app/lib/api";

export default function UserDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await API.post("/user/logout");
    router.push("/");
  };

  return (
    <div className="p-6">

      <div className="flex justify-between mb-6">
        <h1>User Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2"
        >
          Logout
        </button>
      </div>

      <p>Welcome User 👋</p>

    </div>
  );
}