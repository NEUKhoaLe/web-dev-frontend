import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Quiz } from "../../../types";
import * as client from "../client";
import Header from "./Header";
import { dateToString, createDefaultQuiz, calculateTotalPoints } from '../../../../utils';
import "./index.css";

function QuizDetails() {
  const { courseId, quizId } = useParams();
  const { pathname } = useLocation();
  const [quiz, setQuiz] = useState<Quiz>(createDefaultQuiz(courseId || ""));
  const navigate = useNavigate();

  const handlePublish = async () => {
    if (!quizId || !courseId) return;
    const publish = !quiz.publish;
    await client.publishQuiz(courseId, quizId, publish);
    setQuiz({ ...quiz, publish });
  }

  const details = [
    { label: "Quiz Type", value: quiz.details.quiz_type },
    { label: "Points", value: calculateTotalPoints(quiz.questions) },
    { label: "Assignment Group", value: quiz.details.assignment_group },
    { label: "Shuffle Answers", value: quiz.details.shuffle_answers ? "Yes" : "No" },
    { label: "Time Limit", value: `${quiz.details.time_limit} Minutes` },
    { label: "Multiple Attempts", value: quiz.details.multiple_attempts ? "Yes" : "No" },
    { label: "Show Correct Answers", value: quiz.details.time_till_show_correct === 0 ? "Immediately" : `${quiz.details.time_till_show_correct} Minutes` },
    { label: "Access Code", value: quiz.details.access_code || "None"},
    { label: "One Question at a Time", value: quiz.details.one_question ? "Yes" : "No" },
    { label: "Webcam Required", value: quiz.details.webcam ? "Yes" : "No" },
    { label: "Lock Questions After Answering", value: quiz.details.lock_question ? "Yes" : "No" }
  ];

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId || !courseId) return;
      const data = await client.findQuizById(courseId, quizId);
      setQuiz(data);
    };
    fetchQuiz();
  }, [courseId, quizId]);
  return (
    <span style={{marginRight: 24}}>
      <Header 
      isPublished={quiz.publish}
      onPublish={handlePublish}
      onPreview={() => navigate(`${pathname}/Preview`)}
      onEdit={() => navigate(`${pathname}/Edit`)}
      />
      <hr/>
      <h1>{quiz.name}</h1>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex flex-column quiz-details">
            {details.map((detail, index) => (
              <span key={index} className="quiz-detail-item">
                <div className="detail-label"><strong>{detail.label}</strong></div>
                <div className="detail-value">{detail.value}</div>
              </span>
            ))}
          </div>
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Due</th>
                <th>For</th>
                <th>Available from</th>
                <th>Until</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dateToString(quiz.details.due_date)}</td>
                <td>Everyone</td>
                <td>{dateToString(quiz.details.available_date)}</td>
                <td>{dateToString(quiz.details.until_date)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </span>
  );
}
export default QuizDetails;