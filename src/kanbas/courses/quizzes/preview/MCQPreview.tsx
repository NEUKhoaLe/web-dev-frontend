import "./index.css";
import {useParams} from "react-router-dom";
import {QuizQuestion} from "../../../types";
import React from "react";

function MCQPreview({question}: {question: QuizQuestion}) {

    return(
        <div className="preview-mcq-question">
            <div className="preview-mcq-description">
                {question.question_description}
            </div>
            <div className="preview-mcq-answers">
                {question.question_choices.map(choices => {
                    return (
                        <div>
                            <hr/>
                            <span>{choices.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MCQPreview;