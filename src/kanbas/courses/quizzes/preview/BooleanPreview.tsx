import "./index.css";
import {useParams} from "react-router-dom";
import {QuizQuestion} from "../../../types";

function BooleanPreview({question}: {question: QuizQuestion}) {

    return(
        <div className="preview-boolean-question">
            <div>
                {question.question_description}
            </div>
            <hr/>
            <div>
                <input type="radio" value="True"/>
                <label>True</label>
                <br/>
                <input type="radio" value="False"/>
                <label>False</label>
            </div>
        </div>
    )
}

export default BooleanPreview;