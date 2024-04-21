import "./index.css";
import {QuizQuestion} from "../../../types";
import React from "react";
import parse from "html-react-parser";

function MCQPreview({question}: {question: QuizQuestion}) {

    return(
        <div className="preview-mcq-question">
            <div className="preview-mcq-description">
                {parse(
                    question.question_description
                )}
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