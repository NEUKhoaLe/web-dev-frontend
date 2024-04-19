import "./index.css";
import { QuizQuestion, Quiz } from "../../../types";
import {RxBookmark, RxBookmarkFilled, RxTriangleLeft, RxTriangleRight} from "react-icons/rx";
import exp from "constants";
import {useState} from "react";
import * as client from "../client";

function PreviewQuestion({questionList, questions}: {questionList: number[], questions: QuizQuestion[]}){
    const [isBookmark, setBookmark] = useState(true);


    const [questionIndex, setQuestionIndex] = useState(questionList[0]);

    const currentQuestion = questions.at(questionIndex);
    console.log("papapapappa");
    console.log(currentQuestion!.question_description);
    return (
        <div className="preview-body d-flex justify-content-start">
            <div className="fs-3">
                {isBookmark ? <RxBookmark onClick={()=>{
                    setBookmark(!isBookmark)}}/> : <RxBookmarkFilled onClick={()=>{
                    setBookmark(!isBookmark)}}/>}
            </div>
            <div className="preview-question flex-fill">
                <div className="preview-question-title  d-flex">
                    <span></span>
                    <span>Y pts</span>
                </div>
                <div className="preview-question-body">
                    Quiz
                </div>
                <div className="preview-move d-flex">
                    <button type="button" className="preview-back wd-modules-button">
                        <RxTriangleLeft className="fs-5" />
                        Back
                    </button>
                    <button type="button" className="preview-next wd-modules-button">
                        Next
                        <RxTriangleRight className="fs-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PreviewQuestion;