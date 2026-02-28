"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Available Tests</h1>
      <button
        onClick={() => router.push("/test/1")}
        className="bg-purple-500 text-white px-4 py-2"
      >
        Start Test 1
      </button>
    </div>
  );
}