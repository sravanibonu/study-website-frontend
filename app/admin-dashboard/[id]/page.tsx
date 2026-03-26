"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import API from "@/app/lib/api";

export default function Page() {
  const { id } = useParams();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleAdd = async () => {
    await API.post(`/question/add/${id}`, {
      question,
      options,
      answer,
    });

    alert("Question added ✅");
  };

  return (
    <div className="p-6">

      <input
        placeholder="Question"
        className="border p-2 w-full mb-2"
        onChange={(e) => setQuestion(e.target.value)}
      />

      {options.map((_, i) => (
        <input
          key={i}
          placeholder={`Option ${i + 1}`}
          className="border p-2 w-full mb-2"
          onChange={(e) => {
            const arr = [...options];
            arr[i] = e.target.value;
            setOptions(arr);
          }}
        />
      ))}

      <input
        placeholder="Answer"
        className="border p-2 w-full mb-2"
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2"
      >
        Add Question
      </button>

    </div>
  );
}