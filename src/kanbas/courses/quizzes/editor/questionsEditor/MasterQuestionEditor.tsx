import React, {useEffect, useState} from "react";
import {QuestionType, Quiz, QuizQuestion} from "../../../../types";
import MCQEditor from "./MCQEditor";
import BooleanEditor from "./BooleanEditor";
import ShortEditor from "./ShortEditor";

export interface QuestionEditorTypesProps {
  question: QuizQuestion;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
  closeModal: () => void;
  save: () => void;
}

const MasterQuestionEditor = function (props: QuestionEditorTypesProps) {
  const [currentQuestion, setCurrentQuestion] = useState(props.question);
  const [isValid, setIsValid] = useState(false);
  const updateQuestion = function () {
    props.setQuiz((prevQuiz) => {
      return {...prevQuiz, questions: prevQuiz.questions.map(((question, index) => {
          if (question.question_number === currentQuestion.question_number) {
            return currentQuestion;
          }

          return question;
        }))}
    })
  }

  useEffect(() => {
    let correctCount = 0;
    let count = 0;
    currentQuestion.question_choices.forEach(item => {
      if (item.isCorrect) {
        correctCount += 1;
      }

      if (!item.name || item.name === "") {
        count += 1;
      }
    })

    if (count !== 0) {
      setIsValid(false);
      return;
    }

    if (currentQuestion.question_points <= 0) {
      setIsValid(false);
      return;
    }

    if (currentQuestion.question_choices.length <= 1) {
      if (currentQuestion.question_type !== "Short") {
        setIsValid(false);
        return;
      }
    }

    if (currentQuestion.question_type === "Boolean") {
      console.log("got here");
      console.log(!currentQuestion.question_choices.find(item => item.name === "True"));
      if (!currentQuestion.question_choices.find(item => item.name === "True") ||
        !currentQuestion.question_choices.find(item => item.name === "False")) {
        setIsValid(false);
        return;
      }
    }

    if (currentQuestion.question_type === "MCQ" || currentQuestion.question_type === "Boolean") {
      if (correctCount === 1) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
    else {
      if (correctCount > 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }

  }, [currentQuestion.question_choices, currentQuestion.question_type]);

  return (
    <div className={"d-flex flex-column question-editor"}>
      <div className={"d-flex flex-fill justify-content-between"}>
        <div className={"d-flex"}>
          <input className={"form-control question-editor-form"}
                 type={"text"}
                 placeholder={"Question Title"}
                 defaultValue={currentQuestion.question_title}
                 onChange={(e) => {
                   setCurrentQuestion((prevQuestion) => {
                     return {...prevQuestion, question_title: e.target.value};
                   })
                 }}
          />
          <select className={"form-select  question-editor-form"}
                  value={currentQuestion.question_type}
                  onChange={(e) => {
                    setCurrentQuestion((prevQuestion) => {
                      return {...prevQuestion, question_type: e.target.value as QuestionType};
                    })
                  }}
          >
            <option value={"MCQ"}>Multiple Choice Question</option>
            <option value={"Boolean"}>True/False</option>
            <option value={"Short"}>Fill In the Blank</option>
          </select>
        </div>
        <div className={"d-flex align-items-center"}>
          Points:
          <input className={"form-control question-editor-points-form"}
                 type={"number"}
                 defaultValue={currentQuestion.question_points}
                 onChange={(e) => {
                   setCurrentQuestion((prevQuestion) => {
                     return {...prevQuestion, question_points: +e.target.value}
                   })
                 }}
          />
        </div>
      </div>
      <hr/>
      <div className={'flex-column'}>
        {currentQuestion.question_type === "MCQ" &&
          <MCQEditor question={currentQuestion} setQuestion={setCurrentQuestion} isValid={isValid}/>
        }
        {
          currentQuestion.question_type === "Boolean" &&
          <BooleanEditor question={currentQuestion} setQuestion={setCurrentQuestion} isValid={isValid}/>
        }
        {
          currentQuestion.question_type === "Short" &&
          <ShortEditor question={currentQuestion} setQuestion={setCurrentQuestion} isValid={isValid}/>
        }
      </div>
      <div className={"d-flex justify-content-end"}>
        <button style={{marginRight: "4px"}}
                onClick={() => {
                  props.closeModal();
                }}
        >
          cancel
        </button>
        <button style={{marginLeft: "4px", backgroundColor: "red", color: "white"}}
                onClick={() => {
                  if (isValid) {
                    updateQuestion()
                    props.setQuiz(prevState => {
                      return {...prevState, }
                    })
                    props.closeModal();
                  }
                }}
        >
          save changes
        </button>
      </div>
    </div>
  );
}

export default MasterQuestionEditor;