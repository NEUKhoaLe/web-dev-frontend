import { useState, useEffect } from "react";
import { FaCheckCircle, FaChevronDown, FaBan } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as client from "./client";
import Header from "./Header";
import "./index.css";
import { Quiz } from "../../types";
import { useNavigate } from "react-router-dom";
import QuizText from "./QuizText";
import OptionsWithPopover from "./OptionsWithPopover";

function Quizzes() {
  const { courseId } = useParams();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const navigate = useNavigate();

  const getQuizSymbol = (quiz: Quiz) => {
    return quiz.publish
    ? <FaCheckCircle className="text-success footer-icon" onClick={() => publishQuiz(quiz._id, false)}/> 
    : <FaBan className="footer-icon" onClick={() => publishQuiz(quiz._id, true)} />;
  }

  const addQuiz = async () => {
    if (!courseId) return;
    const quiz: Quiz = {
      _id: "",
      name: "New Quiz",
      course: courseId,
      publish: false,
      assign_to: [],
      details: {
        quiz_type: "Multiple Choice",
        total_points: 0,
        assignment_group: "1",
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
    };
    const newQuiz = await client.createQuiz(courseId, quiz);
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${newQuiz._id}`);
  };
  const publishQuiz = async (quizId: string, publish: boolean) => {
    if (!courseId) return;
    await client.publishQuiz(courseId, quizId, publish);
    const updatedQuizzes = quizzes.map((quiz) => {
      if (quiz._id === quizId) {
        quiz.publish = publish;
      }
      return quiz;
    });
    setQuizzes(updatedQuizzes);
  }
  const deleteQuiz = async (quizId: string) => {
    if (!courseId) return;
    await client.deleteQuiz(courseId, quizId);
    const updatedQuizzes = quizzes.filter((quiz) => quiz._id !== quizId);
    setQuizzes(updatedQuizzes);
  }

  const togglePopover = (quizId: string) => {
    setActivePopover(activePopover === quizId ? null : quizId);
  };

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (!courseId) return;
      const quizzes = await client.findQuizzesForCourse(courseId);
      setQuizzes(quizzes);
    };
    fetchQuizzes();
  }, [courseId]);

  return (
    <span style={{marginRight: 24}}>
      <Header addQuiz={addQuiz} />
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
                  <QuizText quiz={quiz} courseId={courseId} />
                </span>
                <span>
                  <button className="clear-button">{getQuizSymbol(quiz)}</button>
                  <OptionsWithPopover 
                  isOpen={activePopover === quiz._id}
                  isPublished={quiz.publish}
                  onClickOutside={() => setActivePopover(null)}
                  onClick={() => togglePopover(quiz._id)}
                  onEdit={() => navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`)}
                  onDelete={() => deleteQuiz(quiz._id)}
                  onPublish={() => publishQuiz(quiz._id, !quiz.publish)}
                  />
                </span>
              </li>))}
          </ul>
        </li>
      </ul>
    </span>
);}
export default Quizzes;