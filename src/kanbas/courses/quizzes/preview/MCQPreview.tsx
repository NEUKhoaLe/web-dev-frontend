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
                            <div className="preview-answer">
                                <input type="radio" value="True" name="choice"/>
                                <label>{choices.name}</label>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MCQPreview;