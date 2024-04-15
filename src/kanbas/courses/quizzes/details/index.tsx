import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Quiz } from "../../../types";
import * as client from "../client";

function QuizDetails() {
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState<Quiz>(
    {
      _id: "",
      name: "",
      course: "",
      publish: false,
      assign_to: [],
      details: {
        quiz_type: "",
        total_points: 0,
        assignment_group: "",
        shuffle_answers: false,
        time_limit: 0,
        multiple_attempts: false,
        show_correct: false,
        access_code: "",
        one_question: false,
        webcam: false,
        lock_question: false,
        available_date: new Date(),
        until_date: new Date()
      },
      questions: [],
      answers: []
    }
  );

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId || !courseId) return;
      const data = await client.findQuizById(courseId, quizId);
      setQuiz(data);
    };
    fetchQuiz();
  }, [courseId, quizId]);
  return (
    <div>
      <h1>Quizzes</h1>
      <h2>{courseId}:{quizId}</h2>
    </div>
  );
}
export default QuizDetails;