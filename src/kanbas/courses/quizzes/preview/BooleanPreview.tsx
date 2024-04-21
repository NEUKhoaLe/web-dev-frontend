import "./index.css";
import {QuizQuestion} from "../../../types";
import parse from 'html-react-parser';

function BooleanPreview({question}: {question: QuizQuestion}) {

    const s = question.question_description;
    return(
        <div className="preview-boolean-question">
            <div>
                {parse(
                    question.question_description
                )}
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