import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Quiz } from "../../../types";
import * as client from "../client";
import Header from "./Header";
import { dateToString, createDefaultQuiz } from '../../../../utils';

function QuizDetails() {
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState<Quiz>(createDefaultQuiz(courseId || ""));

  const handlePublish = async () => {
    if (!quizId || !courseId) return;
    const publish = !quiz.publish;
    await client.publishQuiz(courseId, quizId, publish);
    setQuiz({ ...quiz, publish });
  }

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
      onPreview={() => {}}
      onEdit={() => {}}
      />
      <hr/>
      <h1>{quiz.name}</h1>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column justify-content-between">
          <div className="d-flex flex-column">
            <span>Quiz Type: {quiz.details.quiz_type}</span>
            <span>Points: {quiz.details.total_points}</span>
            <span>Assignment Group: {quiz.details.assignment_group}</span>
            <span>Shuffle Answers: {quiz.details.shuffle_answers ? "Yes" : "No"}</span>
            <span>Time Limit: {quiz.details.time_limit} Minutes</span>
            <span>Multiple Attempts: {quiz.details.multiple_attempts ? "Yes" : "No"}</span>
            <span>Show Correct Answers: {quiz.details.time_till_show_correct === 0 ? "Immediately" : `${quiz.details.time_till_show_correct === 0} Minutes`}</span>
            <span>Access Code: {quiz.details.access_code}</span>
            <span>One Question at a Time: {quiz.details.one_question ? "Yes" : "No"}</span>
            <span>Webcam Required: {quiz.details.webcam ? "Yes" : "No"}</span>
            <span>Lock Questions After Answering: {quiz.details.lock_question ? "Yes" : "No"}</span>
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