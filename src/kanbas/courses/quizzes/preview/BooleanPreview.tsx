import "./index.css";
import {useParams} from "react-router-dom";
import {QuizQuestion} from "../../../types";
// import renderHTML from 'react-render-html';

function BooleanPreview({question}: {question: QuizQuestion}) {

    return(
        <div className="preview-boolean-question">
            <div>
                {question.question_description}
            </div>
            <hr/>
            <div>
                <div className="preview-answer">
                    <input type="radio" value="True" name="bool"/>
                    <label>True</label>
                </div>
                <hr/>
                <div className="preview-answer">
                    <input type="radio" value="False" name="bool"/>
                    <label>False</label>
                </div>

            </div>
        </div>
    )
}

export default BooleanPreview;