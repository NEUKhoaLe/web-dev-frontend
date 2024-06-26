import { Quiz } from "../../../types";
import { PiPencilLight } from "react-icons/pi";
import { MdErrorOutline } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import "./index.css";
import {useLocation, useNavigate, useParams} from "react-router";
import React, {useEffect, useMemo, useState} from "react";
import * as client from "../client";
import {createDefaultQuiz} from "../../../../utils";
import Preview from "./index";
import PreviewQuestion from "./PreviewQuestion";

function QuizPreview() {
    const { courseId, quizId } = useParams();
    const { pathname } = useLocation();
    const [quiz, setQuiz] = useState<Quiz | null>();
    const [questionNumbers,  setQuestionNumbers] = useState<number[]>([]);
    const [overrideIndex, setOverrideIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchQuiz = async () => {
            if (!quizId || !courseId) return;
            const data = await client.findQuizById(courseId, quizId);
            setQuiz(data);

            const quiz: Quiz = data;

            const questions = quiz.questions.map(item => item.question_number)
            const listOfQuestionNumbers = quiz.details.shuffle_answers ? shuffle(questions) : questions;

            setQuestionNumbers(listOfQuestionNumbers);
        };
        fetchQuiz();
    }, [courseId, quizId]);

    const navigate = useNavigate();
    // console.log(quiz.questions);
    const quizPath = pathname.replace("/Preview","");

    const shuffle = (array: number[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
    <div className="give-me-space">
        <div className="preview-header">
            <h1>{quiz ? quiz.name : ""}</h1>
            <div className="preview-banner">
                <MdErrorOutline className="fs-5 me-2" />
                This is a preview of the published version of the quiz
            </div>
            Started:
            <h1>Quiz Instructions</h1>
        </div>
        <hr/>
        <div>
            {quiz && <PreviewQuestion showAll={!quiz.details.one_question} questionList={questionNumbers} questions={quiz.questions} overrideIndex={overrideIndex} setOverrideIndex={(n: number | null) => setOverrideIndex(n)}/> }
        </div>
        <div className="preview-submit">
            Quiz saved at
            <button type="button" className="wd-modules-button mx-1" onClick={() => {navigate(quizPath)}}>Submit Quiz</button>
        </div>
        <div className="d-flex preview-edit-button">
            <button type="button" style={{textAlign: "left"}} className="flex-fill  wd-modules-button" onClick={() => {navigate(quizPath+"/Edit")}}>
                <PiPencilLight className="fs-5"/>
                Keep Editing This Quiz
            </button>
        </div>
        <div className="d-flex flex-column preview-question-list">
            <h3>Questions</h3>
            {questionNumbers.map((question, index) => {
                return (
                    <div className="preview-question-list-item">
                        <GoQuestion  />
                        <span style={{color: "#c83320"}} onClick={() => {
                            console.log(index);
                            setOverrideIndex(index)
                        }}>Question {index + 1}</span>
                    </div>
                )
            })}

        </div>
    </div>
  );
}
export default QuizPreview;

// grab all quiz questions
// pass into the new one
// in the new component, questions.map(item => item.question_number) put this into const listOfQuestionNumbers = useMemo(<>.shuffle())
// make a useState of the current Index = 0
// Every time they press forard ++, back --
// {questions[index]}