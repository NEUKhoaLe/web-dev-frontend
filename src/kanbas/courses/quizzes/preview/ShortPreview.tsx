import "./index.css";
import {useParams} from "react-router-dom";
import {QuizQuestion} from "../../../types";

function ShortPreview({question}: {question: QuizQuestion}) {
    return(
        <div className="preview-short-question">
            <div className="">
                {question.question_description}
            </div>
        </div>
    )
}

export default ShortPreview;