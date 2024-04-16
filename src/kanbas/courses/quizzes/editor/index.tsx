import { useEffect, useState } from "react";
import { Quiz } from "../../../types";
import { createDefaultQuiz } from "../../../../utils";
import { useNavigate, useParams } from "react-router";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizQuestionsEditor from "./QuizQuestionsEditor";
import Header from "./Header";
import { findQuizById, editQuiz } from "../client";
import "./index.css"
import Footer from "./Footer";

function QuizEditor() {
  const { courseId, quizId } = useParams();
  const [quiz, setQuiz] = useState<Quiz>(createDefaultQuiz(quizId || ""));
  const [onDetailsTab, setOnDetailsTab] = useState<boolean>(true);
  const navigate = useNavigate();
  const navigateToQuizList = () => navigate(`/kanbas/courses/${courseId}/quizzes`);

  const handleSave = async (publish: boolean) => {
    if (!quizId || !courseId) return;
    if (publish) quiz.publish = true;
    await editQuiz(courseId, quizId, quiz);
    navigateToQuizList();
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId || !courseId) return;
      const data = await findQuizById(courseId, quizId);
      setQuiz(data);
    };
    fetchQuiz();
  }, [courseId, quizId]);

  return (
    <span style={{marginRight: 24}}>
      <Header isPublished={quiz.publish} quizPoints={quiz.details.total_points}/>
      <hr/>
      <div className="nav nav-tabs mt-2">
        <button className={`nav-link ${onDetailsTab ? "active" : ""}`} onClick={() => setOnDetailsTab(true)}>Details</button>
        <button className={`nav-link ${!onDetailsTab ? "active" : ""}`} onClick={() => setOnDetailsTab(false)}>Questions</button>
      </div>
      {onDetailsTab ? <QuizDetailsEditor quiz={quiz} /> : <QuizQuestionsEditor quiz={quiz} />}
      <Footer 
      onCancel={navigateToQuizList} 
      onSave={() => handleSave(false)} 
      onSaveAndPublish={() => handleSave(true)}
      />
    </span>
  );
}
export default QuizEditor;