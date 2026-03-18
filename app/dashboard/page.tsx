"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import API from "@/app/lib/api";

export default function Dashboard() {
  const router = useRouter();

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  // Form state
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [answer, setAnswer] = useState("");

  // Create quiz API
  const handleCreateQuiz = async () => {
    try {
      await API.post("/quiz/create", {
        title,
        question,
        options: [optionA, optionB, optionC, optionD],
        answer,
      });

      alert("Quiz created successfully ✅");

      // Clear fields
      setTitle("");
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setAnswer("");

    } catch (error) {
      console.log(error);
      alert("Error creating quiz ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Quizzes</h2>
          <p className="text-2xl mt-2">45</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-2xl mt-2">30</p>
        </div>

      </div>

      {/* Quiz Form */}
      <div className="bg-white p-6 rounded-xl shadow mt-8">
        <h2 className="text-xl font-bold mb-4">Create Quiz</h2>

        <input
          value={title}
          placeholder="Quiz Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 p-2 border"
        />

        <input
          value={question}
          placeholder="Question"
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full mb-3 p-2 border"
        />

        <input
          value={optionA}
          placeholder="Option A"
          onChange={(e) => setOptionA(e.target.value)}
          className="w-full mb-2 p-2 border"
        />

        <input
          value={optionB}
          placeholder="Option B"
          onChange={(e) => setOptionB(e.target.value)}
          className="w-full mb-2 p-2 border"
        />

        <input
          value={optionC}
          placeholder="Option C"
          onChange={(e) => setOptionC(e.target.value)}
          className="w-full mb-2 p-2 border"
        />

        <input
          value={optionD}
          placeholder="Option D"
          onChange={(e) => setOptionD(e.target.value)}
          className="w-full mb-2 p-2 border"
        />

        <input
          value={answer}
          placeholder="Correct Answer"
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full mb-3 p-2 border"
        />

        <button
          onClick={handleCreateQuiz}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Create Quiz
        </button>
      </div>

    </div>
  );
}