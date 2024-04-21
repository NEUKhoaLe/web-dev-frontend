import "./index.css";
import {useParams} from "react-router-dom";
import {QuizQuestion} from "../../../types";
import React from "react";

function ShortPreview({question}: {question: QuizQuestion}) {
    return(
        <div className="preview-short-question">
            <div className="">
                {question.question_description}
            </div>
            <div>
                {question.question_choices.map((choices, index) => {
                    return (
                            <div className="preview-answer preview-short-answer">
                                {index + 1}. <input type="text" name="choice"/>
                            </div>
                    )
                })}
            </div>
        <div>

        </div>
        </div>
    )
}

export default ShortPreview;