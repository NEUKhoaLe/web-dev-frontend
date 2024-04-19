import { useEffect, useState } from "react";
import { Quiz } from "../../../types";
import { createDefaultQuiz } from "../../../../utils";
import { useNavigate, useParams } from "react-router";
import QuizDetailsEditor from "./detailsEditor";
import QuizQuestionsEditor from "./questionsEditor";
import Header from "./Header";
import { findQuizById, editQuiz } from "../client";
import "./index.css"
import Footer from "./Footer";

function QuizEditor() {
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState<Quiz>(createDefaultQuiz(courseId || ""));
  const [quiz_id, setQuiz_id] = useState<string>("");
  const [onDetailsTab, setOnDetailsTab] = useState<boolean>(true);
  const navigate = useNavigate();
  const navigateToQuizList = () => navigate(`/Kanbas/Courses/${courseId}/Quizzes`);

  const handleSave = async (publish: boolean) => {
    if (!quizId || !courseId) return;
    if (publish) quiz.publish = true;
    quiz._id = quiz_id;
    await editQuiz(courseId, quiz_id, quiz);
    publish ? navigateToQuizList() : navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`);
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId || !courseId) return;
      const data = await findQuizById(courseId, quizId);
      setQuiz(data);
      setQuiz_id(data._id);
    };
    fetchQuiz();
  }, [courseId, quizId]);

  return (
    <span style={{marginRight: 24}}>
      <Header isPublished={quiz.publish} quizPoints={quiz.questions.reduce((previousValue, currentValue, currentIndex, array) => {
        return previousValue + currentValue.question_points
      }, 0) }/>
      <hr/>
      <div className="nav nav-tabs mt-2 me-5">
        <button className={`nav-link ${onDetailsTab ? "active" : ""}`} onClick={() => setOnDetailsTab(true)}>Details</button>
        <button className={`nav-link ${!onDetailsTab ? "active" : ""}`} onClick={() => setOnDetailsTab(false)}>Questions</button>
      </div>
      {onDetailsTab ? <QuizDetailsEditor quiz={quiz} setQuiz={setQuiz} /> : <QuizQuestionsEditor quiz={quiz} setQuiz={setQuiz}/>}
      <Footer 
      onCancel={navigateToQuizList} 
      onSave={() => handleSave(false)} 
      onSaveAndPublish={() => handleSave(true)}
      />
    </span>
  );
}
export default QuizEditor;