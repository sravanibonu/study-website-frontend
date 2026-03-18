"use client";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">

      {/* LEFT SIDE MENU */}
      <div className="w-1/4 bg-gray-100 p-4 space-y-4">
        <h2 className="font-bold text-lg mb-4">Admin Panel</h2>

        <div className="bg-white p-3 rounded shadow cursor-pointer">Create Questions</div>
        <div className="bg-white p-3 rounded shadow cursor-pointer">Grading</div>
        <div className="bg-white p-3 rounded shadow cursor-pointer">Test Sections</div>
        <div className="bg-white p-3 rounded shadow cursor-pointer">Import Questions</div>
        <div className="bg-white p-3 rounded shadow cursor-pointer">Test Settings</div>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-3/4 p-6">
        <h1 className="text-2xl font-bold mb-4">Create MCQ Question</h1>

        <input
          type="text"
          placeholder="Enter Question"
          className="w-full border p-2 mb-4 rounded"
        />

        <div className="space-y-2">
          <input className="w-full border p-2 rounded" placeholder="Option 1" />
          <input className="w-full border p-2 rounded" placeholder="Option 2" />
          <input className="w-full border p-2 rounded" placeholder="Option 3" />
          <input className="w-full border p-2 rounded" placeholder="Option 4" />
        </div>

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Save Question
        </button>
      </div>
    </div>
  );
}