import "./index.css";
import {useParams} from "react-router-dom";
import {QuizQuestion} from "../../../types";

function MCQPreview({question}: {question: QuizQuestion}) {

    return(
        <div className="preview-mcq-question">
            <div>
                {question.question_description}
            </div>
        </div>
    )
}

export default MCQPreview;