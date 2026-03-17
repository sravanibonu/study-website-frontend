"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

interface Question {
  _id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface ResultData {
  questions: Question[];
  answers: Record<string, string>;
  rank?: number;
  totalUsers?: number;
}

export default function ResultPage() {
  const [data, setData] = useState<ResultData | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("result");

    if (stored) {
      const parsed: ResultData = JSON.parse(stored);
      setData(parsed);

      const calculatedScore = parsed.questions.reduce((acc, q) => {
        return parsed.answers[q._id] === q.correctAnswer ? acc + 1 : acc;
      }, 0);

      setScore(calculatedScore);
    }
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg">Loading Result...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Test Result
          </h2>

          {/* Score Summary */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-lg font-semibold">
              Score: {score} / {data.questions.length}
            </p>

            <p className="text-md mt-2">
              Rank: {data.rank ?? "Calculating..."}
            </p>

            {data.totalUsers && (
              <p className="text-sm text-gray-600">
                Among {data.totalUsers} students
              </p>
            )}
          </div>

          {/* Questions Review */}
          {data.questions.map((q, index) => {
            const userAnswer = data.answers[q._id];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={q._id}
                className={`mb-6 p-5 rounded-lg border ${
                  isCorrect
                    ? "border-green-400 bg-green-50"
                    : "border-red-400 bg-red-50"
                }`}
              >
                <p className="font-semibold mb-2">
                  Q{index + 1}. {q.question}
                </p>

                <p>
                  Your Answer:{" "}
                  <span
                    className={
                      isCorrect
                        ? "text-green-600 font-medium"
                        : "text-red-600 font-medium"
                    }
                  >
                    {userAnswer || "Not Answered"}
                  </span>
                </p>

                {!isCorrect && (
                  <p className="text-green-600 font-medium">
                    Correct Answer: {q.correctAnswer}
                  </p>
                )}

                <p className="text-gray-700 mt-2">
                  Explanation: {q.explanation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}