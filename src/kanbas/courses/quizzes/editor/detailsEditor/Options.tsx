import { Quiz } from "../../../../types"

const DetailsOptions = ({ quiz, setQuiz } : { quiz: Quiz, setQuiz: React.Dispatch<React.SetStateAction<Quiz>>}) => {
  return (
    <div>
    <span className="mt-2" style={{fontWeight: 700}}>Options</span>
      <div>
        <input
          id="shuffle-answers"
          type="checkbox"
          checked={quiz.details.shuffle_answers}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, shuffle_answers: e.target.checked }})}
        />
        <label className="mt-3 mb-2 ms-2" htmlFor="shuffle-answers">Shuffle Answers</label>
      </div>
      <div>
        <input 
          id="time-limit" 
          type="checkbox" 
          checked={quiz.details.time_limit !== 0}
          onChange={(e) => setQuiz({ ...quiz, 
            details: { ...quiz.details, time_limit: e.target.checked ? quiz.details.time_limit || 20 : 0 }})}
        />
        <label className="mt-3 mb-2 ms-2 me-4" htmlFor="time-limit">Time Limit</label>
        <input
          type="number"
          style={{ width: 50 }}
          className="me-1"
          value={quiz.details.time_limit}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, time_limit: parseInt(e.target.value) }})}
        />
        <span>Minutes</span>
      </div>
      <div>
        <input
          id="multiple-attempts"
          type="checkbox"
          checked={quiz.details.multiple_attempts}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, multiple_attempts: e.target.checked }})}
        />
        <label className="mt-3 mb-2 ms-2" htmlFor="multiple-attempts">Allow Multiple Attemps</label>
      </div>
      <div>
        <input 
          id="show-correct" 
          type="checkbox" 
          checked={quiz.details.time_till_show_correct !== 0}
          onChange={(e) => setQuiz({ ...quiz, 
            details: { ...quiz.details, time_till_show_correct: e.target.checked ? quiz.details.time_till_show_correct || 20 : 0 }})}
        />
        <label className="mt-3 mb-2 ms-2 me-4" htmlFor="show-correct">Time Untill Correct Answers Shown</label>
        <input
          type="number"
          style={{ width: 50 }}
          className="me-1"
          value={quiz.details.time_till_show_correct}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, time_till_show_correct: parseInt(e.target.value) }})}
        />
        <span>Minutes</span>
      </div>
      <div>
        <input
          id="one-question"
          type="checkbox"
          checked={quiz.details.one_question}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, one_question: e.target.checked }})}
        />
        <label className="mt-3 mb-2 ms-2" htmlFor="one-question">One Question at a Time</label>
      </div>
      <div>
        <input
          id="webcam"
          type="checkbox"
          checked={quiz.details.webcam}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, webcam: e.target.checked }})}
        />
        <label className="mt-3 mb-2 ms-2" htmlFor="webcam">Require Webcam</label>
      </div>
      <div>
        <input
          id="lock-question"
          type="checkbox"
          checked={quiz.details.lock_question}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, lock_question: e.target.checked }})}
        />
        <label className="mt-3 mb-2 ms-2" htmlFor="lock-question">Lock Question After Answering</label>
      </div>
      <div>
        <label className="mt-3 mb-2 me-2" htmlFor="access-code">Access Code: </label>
        <input
          type="text"
          className="form-control"
          style={{ maxWidth: 200 }}
          value={quiz.details.access_code}
          onChange={(e) => setQuiz({ ...quiz, details: { ...quiz.details, access_code: e.target.value } })}
        />
      </div>
    </div>
  )
}
export default DetailsOptions;