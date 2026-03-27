"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import API from "@/app/lib/api";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  // 🔐 Protect admin
  useEffect(() => {
    const check = async () => {
      try {
        const { data } = await API.get("/user/profile", {
          withCredentials: true,
        });

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

  // 🔄 Load questions
  const loadQuestions = async () => {
    try {
      const { data } = await API.get(`/questions/${id}`, {
        withCredentials: true,
      });
      setQuestions(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, [id]);

  // ➕ Add / Update
  const handleSave = async () => {
    if (!question || options.some((o) => !o)) {
      return alert("Fill all fields ❗");
    }

    try {
      if (editId) {
        await API.put(
          `/question/${editId}`,
          {
            question,
            options,
            correctAnswer: correctIndex,
          },
          { withCredentials: true }
        );
      } else {
        await API.post(
          `/question/add/${id}`,
          {
            question,
            options,
            correctAnswer: correctIndex,
          },
          { withCredentials: true }
        );
      }

      alert(editId ? "Updated ✅" : "Added ✅");

      // reset
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectIndex(0);
      setEditId(null);

      loadQuestions();
    } catch {
      alert("Error ❌");
    }
  };

  // ❌ Delete
  const handleDelete = async (qid: string) => {
    if (!confirm("Delete question?")) return;

    try {
      await API.delete(`/question/${qid}`, {
        withCredentials: true,
      });
      loadQuestions();
    } catch {
      alert("Delete failed ❌");
    }
  };

  // ✏️ Edit
  const handleEdit = (q: any) => {
    setQuestion(q.question);
    setOptions(q.options);
    setCorrectIndex(q.correctAnswer);
    setEditId(q._id);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">

      {/* Header */}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">
          {editId ? "Edit Question" : "Add Question"}
        </h1>

        <button
          onClick={() => router.push("/admin-dashboard")}
          className="text-blue-600 underline"
        >
          ← Back
        </button>
      </div>

      {/* Question */}
      <input
        value={question}
        placeholder="Enter Question"
        className="border p-2 w-full mb-3 rounded"
        onChange={(e) => setQuestion(e.target.value)}
      />

      {/* Options */}
      {options.map((opt, i) => (
        <input
          key={i}
          value={opt}
          placeholder={`Option ${i + 1}`}
          className="border p-2 w-full mb-2 rounded"
          onChange={(e) => {
            const arr = [...options];
            arr[i] = e.target.value;
            setOptions(arr);
          }}
        />
      ))}

      {/* Correct Answer */}
      <select
        value={correctIndex}
        onChange={(e) => setCorrectIndex(Number(e.target.value))}
        className="border p-2 w-full mb-4 rounded"
      >
        <option value={0}>Correct: Option 1</option>
        <option value={1}>Correct: Option 2</option>
        <option value={2}>Correct: Option 3</option>
        <option value={3}>Correct: Option 4</option>
      </select>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded w-full mb-6"
      >
        {editId ? "Update Question" : "Add Question"}
      </button>

      {/* LIST */}
      <h2 className="text-xl font-semibold mb-3">All Questions</h2>

      {questions.length === 0 && (
        <p className="text-gray-500">No questions yet</p>
      )}

      <div className="space-y-3">
        {questions.map((q) => (
          <div
            key={q._id}
            className="border p-3 rounded flex flex-col gap-2"
          >
            <strong>{q.question}</strong>

            <ul className="text-sm">
              {q.options.map((opt: string, i: number) => (
                <li
                  key={i}
                  className={
                    i === q.correctAnswer
                      ? "text-green-600 font-semibold"
                      : ""
                  }
                >
                  {opt}
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(q)}
                className="bg-yellow-500 px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(q._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
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