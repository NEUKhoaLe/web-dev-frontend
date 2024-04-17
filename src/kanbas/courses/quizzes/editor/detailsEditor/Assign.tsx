import { Quiz } from "../../../../types";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const DetailsAssign = ({ quiz, setQuiz } : { quiz: Quiz, setQuiz: React.Dispatch<React.SetStateAction<Quiz>>}) => {
  return (
    <div className="form-control mt-5 details-assign">
      <div>
        <label style={{fontWeight: 700}} htmlFor="assign-to">Assign To</label>
        <input
          id="assign-to"
          type="text"
          className="form-control"
          value="Everyone"
          style={{ maxWidth: 300 }}
        />
      </div>
      <div className="datepicker">
        <label style={{fontWeight: 700}} htmlFor="due">Due</label>
        <DateTimePicker
          id="due"
          className="form-control"
          clearIcon={null}
          value={quiz.details.due_date}
          onChange={(date) => setQuiz({ ...quiz, details: { ...quiz.details, due_date: date as Date } })}
        />
      </div>
      <div className="datepicker">
        <label style={{fontWeight: 700}} htmlFor="available-from">Available From</label>
        <DateTimePicker
          id="available-from"
          className="form-control"
          clearIcon={null}
          value={quiz.details.available_date}
          onChange={(date) => setQuiz({ ...quiz, details: { ...quiz.details, available_date: date as Date } })}
        />
      </div>
      <div className="datepicker">
        <label style={{fontWeight: 700}} htmlFor="available-til">Available Until</label>
        <DateTimePicker
          id="available-from"
          className="form-control"
          clearIcon={null}
          value={quiz.details.until_date}
          onChange={(date) => setQuiz({ ...quiz, details: { ...quiz.details, until_date: date as Date } })}
        />
      </div>
    </div>
  )
}
export default DetailsAssign;