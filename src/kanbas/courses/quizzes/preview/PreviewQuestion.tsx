import "./index.css";
import { QuizQuestion, Quiz } from "../../../types";
import {RxBookmark, RxBookmarkFilled, RxTriangleLeft, RxTriangleRight} from "react-icons/rx";
import exp from "constants";
import React, {useState} from "react";
import * as client from "../client";
import MCQEditor from "../editor/questionsEditor/MCQEditor";
import MCQPreview from "./MCQPreview";
import BooleanPreview from "./BooleanPreview";
import ShortPreview from "./ShortPreview";

function PreviewQuestion({questionList, questions}: {questionList: number[], questions: QuizQuestion[]}){
    const [isBookmark, setBookmark] = useState(true);

    const [questionIndex, setQuestionIndex] = useState(0);

    const currentQuestion = questions.at(questionIndex)!;
    console.log("papapapappa");
    console.log(currentQuestion!);
    console.log("pappappapa")
    return (
        <div className="preview-body d-flex justify-content-start">
            <div className="fs-3">
                {isBookmark ? <RxBookmark onClick={()=>{
                    setBookmark(!isBookmark)}}/> : <RxBookmarkFilled onClick={()=>{
                    setBookmark(!isBookmark)}}/>}
            </div>
            <div className="preview-question flex-fill">
                <div className="preview-question-title  d-flex">
                    <span>Question {questionIndex + 1}</span>
                    <span>WTF pts</span>
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
                <div className="preview-move d-flex">
                    <button type="button" className="preview-back wd-modules-button" onClick={() => setQuestionIndex(questionIndex - 1)}>
                        <RxTriangleLeft className="fs-5" />
                        Back
                    </button>
                    <button type="button" className="preview-next wd-modules-button" onClick={() => setQuestionIndex(questionIndex + 1)}>
                        Next
                        <RxTriangleRight className="fs-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PreviewQuestion;