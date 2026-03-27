"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import API from "@/app/lib/api";

export default function QuizPage() {
  const { id } = useParams();
  const router = useRouter();

  const [questions, setQuestions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await API.get("/user/profile");
      } catch {
        router.push("/login");
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const fetchQ = async () => {
      const { data } = await API.get(`/questions/${id}`);
      setQuestions(data);
    };

    if (id) fetchQ();
  }, [id]);

  if (!questions.length) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2>{questions[current].question}</h2>

        {questions[current].options.map((opt: string, i: number) => (
          <button key={i} onClick={() => setCurrent(current + 1)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}