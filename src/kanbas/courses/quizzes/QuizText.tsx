import { Link } from 'react-router-dom';
import { Quiz } from '../../types';
import { dateToString } from '../../../utils';


function QuizText({ quiz, courseId }: { quiz: Quiz, courseId: string | undefined }) {
  const getAvailabilityTextElement = (quiz: Quiz) => {
    const currentDate = new Date();
    const availableDate = new Date(quiz.details.available_date);
    const untilDate = new Date(quiz.details.until_date);
    if (currentDate > untilDate) {
      return (<span>Closed</span>);
    } else if (currentDate > availableDate && currentDate < untilDate) {
      return (<span>Available</span>);
    } else {
      return (<><span>Not available until</span> {dateToString(quiz.details.available_date, false)}</>);
    }
  };
  const getNumberOfQuestionsText = (quiz: Quiz) => {
    const numQuestions = quiz.questions.length;
    const footerText = numQuestions === 1 ? "Question" : "Questions";
    return `${numQuestions} ${footerText}`;
  }

  return (
    <span>
      <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`} className="quiz-name-text">
        {quiz.name}
      </Link> <br />
      <span className="quiz-sub-text" style={{fontSize: 12}}>
      {getAvailabilityTextElement(quiz)} | <span>Due</span> {dateToString(quiz.details.due_date)} | {quiz.details.total_points} pts | {getNumberOfQuestionsText(quiz)}
      </span>
    </span>
  );
}

export default QuizText;