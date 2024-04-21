import "./index.css";
import { QuizQuestion, Quiz } from "../../../types";
import {RxBookmark, RxBookmarkFilled, RxTriangleLeft, RxTriangleRight} from "react-icons/rx";
import exp from "constants";
import React, {useEffect, useState} from "react";
import * as client from "../client";
import MCQEditor from "../editor/questionsEditor/MCQEditor";
import MCQPreview from "./MCQPreview";
import BooleanPreview from "./BooleanPreview";
import ShortPreview from "./ShortPreview";

function PreviewQuestion({showAll, questionList, questions, overrideIndex, setOverrideIndex}: {showAll: boolean, questionList: number[], questions: QuizQuestion[], overrideIndex: number | null, setOverrideIndex: (n: number | null) => void}){
    const [isBookmark, setBookmark] = useState<number[]>([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | undefined>(questions.find(item => item.question_number === questionList.at(questionIndex)!));

    console.log("questionslist")
    console.log(questionList);

    console.log("currentQuestion:");
    console.log(currentQuestion);
    console.log(":currentQuestion")

    const back = () => {
        setOverrideIndex(null);
        setQuestionIndex(questionIndex - 1);
    };

    const forward = () => {
        setOverrideIndex(null);
        setQuestionIndex(questionIndex + 1);
    };

    useEffect(() => {
        if (overrideIndex !== null) {
            setQuestionIndex(overrideIndex);
        }
    }, [overrideIndex]);

    useEffect(() => {
        setCurrentQuestion(questions.find(item => item.question_number === questionList.at(questionIndex)!));
    }, [questionIndex]);

    if (showAll) {
        return (
            <div>{
            questionList.map((number, index) => {
                const cquestion = questions.find(item => item.question_number === number)!;
                return (
                    <div className="preview-body d-flex justify-content-start">
                        <div className="fs-3">
                            {!isBookmark.includes(index) ? <RxBookmark onClick={()=> {
                                setBookmark(prevState => [...prevState, index])}}/> :
                              <RxBookmarkFilled onClick={()=> {
                                setBookmark(prevState => prevState.filter(item => item !== index))}}/>}
                        </div>
                        <div className="preview-question flex-fill">
                            <div className="preview-question-title  d-flex">
                                <span>Question {index + 1}</span>
                                <span>{cquestion.question_points} pts</span>
                            </div>
                            <div className="preview-question-body">
                                {cquestion.question_type === "MCQ" &&
                                    <MCQPreview question={cquestion}/>
                                }
                                {cquestion.question_type === "Boolean" &&
                                    <BooleanPreview question={cquestion}/>
                                }
                                {cquestion.question_type === "Short" &&
                                    <ShortPreview question={cquestion}/>
                                }
                            </div>
                        </div>
                    </div>
                )
            })
                }</div>
        )
    }
    if (currentQuestion) {
        return (
            <div className="preview-body d-flex justify-content-start">
                <div className="fs-3">
                    {!isBookmark.includes(questionIndex) ? <RxBookmark onClick={()=> {
                          setBookmark(prevState => [...prevState, questionIndex])}}/> :
                      <RxBookmarkFilled onClick={()=> {
                          setBookmark(prevState => prevState.filter(item => item !== questionIndex))}}/>}
                </div>
                <div className="preview-question flex-fill">
                    <div className="preview-question-title  d-flex">
                        <span>Question {questionIndex + 1}</span>
                        <span>{currentQuestion.question_points} pts</span>
                    </div>
                    <div className="preview-question-body">
                        {currentQuestion.question_type === "MCQ" &&
                            <MCQPreview question={currentQuestion}/>
                        }
                        {currentQuestion.question_type === "Boolean" &&
                            <BooleanPreview question={currentQuestion}/>
                        }
                        {currentQuestion.question_type === "Short" &&
                            <ShortPreview question={currentQuestion}/>
                        }
                    </div>
                    <div className="preview-move d-flex ">
                        {/*ask ritz for setup of buttons*/}
                        {questionIndex !== 0 &&
                            <button type="button" className="preview-back wd-modules-button" onClick={() => back()}>
                            <RxTriangleLeft className="fs-5" />
                            Back
                        </button>
                        }
                        {questionIndex !== questionList.length-1 &&
                            <button type="button" className="preview-next wd-modules-button" onClick={() => forward()}>
                                Next
                                <RxTriangleRight className="fs-5" />
                            </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div></div>
    )
}

export default PreviewQuestion;