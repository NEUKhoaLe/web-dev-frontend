import {Quiz, QuizQuestion} from "../../../../types";
import React, {useState} from "react";
import {FaPlus} from "react-icons/fa";
import MasterQuestionEditor from "./MasterQuestionEditor";

function QuizQuestionsEditor({ quiz, setQuiz, handleSave }: { quiz: Quiz, setQuiz: React.Dispatch<React.SetStateAction<Quiz>>, handleSave: () => void }) {
  const handleClick = function () {
    const length = quiz.questions.length;

     const defaultQuestion: QuizQuestion = {
        question_number: length + 1,
        question_type: "MCQ",
        question_description: "",
        question_choices: [],
        question_title: `Question ${length + 1}`,
        question_points: 1,
      };

     setQuiz((prevState) => {
       return {...prevState, questions: [...prevState.questions, defaultQuestion]}
     })
  }

  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>();

  return (
    <div>
      <h1>Quiz Questions Editor</h1>
      {currentQuestion &&
        (
          <div className={"background-modal"} onClick={() => setCurrentQuestion(null)}>
            <div className={"modal-item"} onClick={(e) => e.stopPropagation()}>
              <MasterQuestionEditor question={currentQuestion} setQuiz={setQuiz} closeModal={() => setCurrentQuestion(null)} save={handleSave}/>
            </div>
          </div>
        )
      }
      <table className="table table-question-editor">
        <thead>
        <tr>
          <th>Question Number</th>
          <th>Question Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          {quiz.questions.map(q => {
            return (
              <tr key={q.question_number}>
            <td>{q.question_number}</td>
            <td>{q.question_title}</td>
            <td><button onClick={() => setCurrentQuestion(q)}>Edit</button></td>
                <td><button onClick={() => {
                  setQuiz(prevState => {
                    return {...prevState, questions: prevState.questions.filter(i => {
                      return i.question_number !== q.question_number
                      })}
                  })
                }}>Delete</button>
                </td>
            </tr>
            )
          })}
        </tbody>
      </table>
      <div className={"quiz-question-editor-button-group"}>
        <button className={'wd-modules-button'} onClick={handleClick}>
          <FaPlus />
          New Question
        </button>
      </div>
    </div>
  );
}
export default QuizQuestionsEditor;