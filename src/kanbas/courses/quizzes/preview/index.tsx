import { Quiz } from "../../../types";
import { RxTriangleRight, RxTriangleLeft } from "react-icons/rx";
import { PiPencilLight } from "react-icons/pi";

import { findQuizById, editQuiz } from "../client";
import { MdErrorOutline } from "react-icons/md";
import { CgPentagonRight } from "react-icons/cg";
import { GoQuestion } from "react-icons/go";




import "./index.css"
import {useLocation, useParams} from "react-router";
import {useEffect, useState} from "react";
import * as client from "../client";
import {createDefaultQuiz} from "../../../../utils";

function QuizPreview(
//     {onSubmit}: {
//     onSubmit: () => void;
// }
) {
    const { courseId, quizId } = useParams();
    const { pathname } = useLocation();
    const [quiz, setQuiz] = useState<Quiz>(createDefaultQuiz(courseId || ""))

    useEffect(() => {
        const fetchQuiz = async () => {
            if (!quizId || !courseId) return;
            const data = await client.findQuizById(courseId, quizId);
            setQuiz(data);
        };
        fetchQuiz();
    }, [courseId, quizId]);

    console.log(quiz.questions);
  return (
    <div className="give-me-space">
        <div className="preview-header">
            <h1>{quiz.name}</h1>
            <div className="preview-banner">
                <MdErrorOutline className="fs-5 me-2" />
                This is a preview of the published version of the quiz
            </div>
            Started:
            <h1>Quiz Instructions</h1>
        </div>
        <hr/>
        <div className="preview-body d-flex justify-content-start">
            <div className="fs-1">
                <CgPentagonRight />
            </div>
            <div className="preview-question flex-fill">
                <div className="preview-question-title  d-flex">
                    <span>Question X</span>
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
        <div className="preview-submit">
            Quiz saved at
            <button type="button" className="wd-modules-button mx-1">Submit Quiz</button>
        </div>
        <div className="d-flex preview-edit-button">
            <button type="button" className="flex-fill  wd-modules-button">
                <PiPencilLight className="fs-5"/>
                Keep Editing This Quiz
            </button>
        </div>
        <div className="d-flex flex-column preview-question-list">
            Questions
            <div className="preview-question-list-item">
                <GoQuestion  />
                <span>Question 1</span>
            </div>
        </div>
    </div>
  );
}
export default QuizPreview;