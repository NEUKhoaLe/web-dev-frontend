import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaEllipsisV, FaChevronDown, FaBan } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";
import Header from "./Header";
import "./index.css";
import { Quiz } from "../../types";


function Quizzes() {
  const { courseId } = useParams();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const fetchQuizzes = async () => {
    if (!courseId) return;
    const quizzes = await client.findQuizzesForCourse(courseId);
    setQuizzes(quizzes);
  }

  const getAvailabilityTextElement = (quiz: Quiz) => {
    const currentDate = new Date();
    const availableDate = new Date(quiz.details.available_date);
    const untilDate = new Date(quiz.details.until_date);
    if (currentDate > untilDate) {
      return (<span>Closed</span>);
    } else if (currentDate > availableDate && currentDate < untilDate) {
      return (<span>Available</span>);
    } else {
      return (<><span>Not available until</span> {quiz.details.available_date}</>);
    }
  };
  const getNumberOfQuestionsText = (quiz: Quiz) => {
    const numQuestions = quiz.questions.length;
    const footerText = numQuestions === 1 ? "Question" : "Questions";
    return `${numQuestions} ${footerText}`;
  }
  const getQuizSymbol = (isPublished: boolean) => {
    return isPublished ? <FaCheckCircle className="text-success" /> : <FaBan />;
  }

  useEffect(() => {
    fetchQuizzes();
  }, [courseId]);

  return (
    <span style={{marginRight: 24}}>
      <Header />
      <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaChevronDown className="me-2" /> Assignment Quizzes
          </div>
          <ul className="list-group">
            {quizzes.map((quiz: Quiz) => (
              <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
                <span className="d-flex flex-row align-items-center">
                  <img src={`/images/quiz-icon-${quiz.publish ? 'published' : 'unpublished'}.png`} alt="" className="mx-2 quiz-icon" />
                  <span>
                    <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz.quiz_id}`} className="quiz-name-text">
                      {quiz.name}
                    </Link> <br />
                    <span className="quiz-sub-text" style={{fontSize: 12}}>
                    {getAvailabilityTextElement(quiz)} | <span>Due</span> {quiz.details.until_date} | {quiz.details.total_points} pts | {getNumberOfQuestionsText(quiz)}
                    </span>
                  </span>
                </span>
                <span>
                  {getQuizSymbol(quiz.publish)}<FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </span>
);}
export default Quizzes;