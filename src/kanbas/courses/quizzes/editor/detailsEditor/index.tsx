import { Quiz, QuizType, AssignmentGroup } from "../../../../types";
import RichTextEditor from "../../../../../components/RichTextEditor";
import DetailsOptions from "./Options";
import DetailsAssign from "./Assign";

function QuizDetailsEditor({ quiz, setQuiz }: { quiz: Quiz, setQuiz: React.Dispatch<React.SetStateAction<Quiz>> }) {
  const handleDescriptionChange = (description: string) => {
    setQuiz({ ...quiz, details: { ...quiz.details, description } });
  }
  return (
    <div className="d-flex flex-column mt-4 me-5">
      <input
        type="text"
        className="form-control"
        value={quiz.name}
        style={{ maxWidth: 300 }}
        onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}
      />
      <span className="mt-3 mb-2">Quiz Instructions: </span>
      <RichTextEditor text={quiz.details.description || ""} setText={handleDescriptionChange} />
      <div>
        <label className="mt-3 mb-2 me-2" htmlFor="quiz-type">Quiz Type: </label>
        <select
          id="quiz-type"
          className="form-select"
          style={{ maxWidth: 200 }}
          value={quiz.details.quiz_type}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, quiz_type: e.target.value as QuizType }})}
        >
          <option value="Graded Quiz">Graded Quiz</option>
          <option value="Practice Quiz">Practice Quiz</option>
          <option value="Graded Survey">Graded Survey</option>
          <option value="Ungraded Survey">Ungraded Survey</option>
        </select>
      </div>
      <div>
        <label className="mt-3 mb-2 me-2" htmlFor="assignment-group">Assignment Group: </label>
        <select
          id="assignment-group"
          style={{ maxWidth: 200 }}
          className="form-select"
          value={quiz.details.assignment_group}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, assignment_group: e.target.value as AssignmentGroup }})}
        >
          <option value="Quizzes">Quizzes</option>
          <option value="Exams">Exams</option>
          <option value="Assignments">Assignments</option>
          <option value="Project">Project</option>
        </select>
      </div>
      <DetailsOptions quiz={quiz} setQuiz={setQuiz} />
      <DetailsAssign  quiz={quiz} setQuiz={setQuiz} />
    </div>
  );
}
export default QuizDetailsEditor;