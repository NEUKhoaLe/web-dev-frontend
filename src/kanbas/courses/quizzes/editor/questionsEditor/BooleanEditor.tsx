import React, {useEffect, useState} from "react";
import {QuizQuestion, QuizQuestionAndChoices} from "../../../../types";
import {QuestionEditorTypesProps} from "./MCQEditor";
import RichTextEditor from "../../../../../components/RichTextEditor";
import {FaArrowRight, FaPlus, FaTrash} from "react-icons/fa";

const BooleanEditor = function (props: QuestionEditorTypesProps) {
  const handleDescriptionChange = function (description: string) {
    props.setQuestion((prevState) => {
      return {...prevState, question_description: description}
    })
  }

  const handleAddAnswer = function () {
    props.setQuestion((prevState) => {
      return {...prevState, question_choices: [...prevState.question_choices, {isCorrect: !prevState.question_choices.find(item => item.isCorrect), name: ""} as QuizQuestionAndChoices]}
    })
  }

  return (
    <div className={"d-flex flex-column"}>
      <p className={"flex-row"}>
        Enter your question and multiple answers, then select the one correct answer.
      </p>
      <p className={"fw-bold flex-row"}>
        Question:
      </p>
      <RichTextEditor text={props.question.question_description || ""} setText={handleDescriptionChange}/>
      <p className={"fw-bold flex-row"}>
        Answers:
      </p>
      {props.question.question_choices.map((item, index) => {
        return (
          <div className={"d-flex flex-row"}>
            <div className={"flex-column"}>
              <div className={`flex-row  text-color-${item.isCorrect ? "green" : "red"} question-choices`}>
                {item.isCorrect ? "Correct Answer" : "Possible Answer"}
                <FaArrowRight/>
                <input type={`text`} defaultValue={item.name} onChange={(e) => {
                  props.setQuestion(prevState => {
                    return {
                      ...prevState, question_choices: prevState.question_choices.map((c, i) => {
                        if (index === i) {
                          return {...c, name: e.target.value} as QuizQuestionAndChoices;
                        } else {
                          return c;
                        }
                      })
                    }
                  })
                }}/>
              </div>
              <button className={`flex-row color-${item.isCorrect ? "green" : "red"}`}
                      onClick={() => {
                        props.setQuestion(prevState => {
                          return {
                            ...prevState, question_choices: prevState.question_choices.map((c, i) => {
                              if (i === index) {
                                if (c.isCorrect) {
                                  return {...c, isCorrect: false};
                                } else {
                                  return {...c, isCorrect: true};
                                }
                              }

                              if (!item.isCorrect) {
                                return {...c, isCorrect: false};
                              }

                              return c;
                            })
                          }
                        })
                      }}
              >
                is Answer
              </button>
            </div>
          </div>
        );
      })}
      <button className={"flex-row align-self-end"} onClick={handleAddAnswer}>
        <FaPlus/>
        Add Another Answer
      </button>
      {!props.isValid &&
          <div className={"flex-row text-center mt-4"} style={{color: "red", fontWeight: "bold"}}>
              <p>True/False Questions have to only have 1 correct answer, and have the choices "True" and "False" and
                  more than 0 points.</p>
          </div>
      }
      <hr/>
    </div>
  );
}

export default BooleanEditor;