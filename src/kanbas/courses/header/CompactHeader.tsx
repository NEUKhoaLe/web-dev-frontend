import { FaBars, FaAngleDown } from "react-icons/fa"
import { Link } from "react-router-dom";
import "./index.css";
function CompactHeader(
  {courseNumber, coursesSection, onLeftButtonClick, onRightButtonClick}: 
  {courseNumber: string, coursesSection: string, onLeftButtonClick: () => void, onRightButtonClick: () => void}) {
  return (
    <div className="compact-top-bar d-flex d-md-none flex-row justify-content-between align-items-center py-3 px-3 mb-3">
      <button type="button" onClick={onLeftButtonClick}>
        <FaBars />
      </button>
      <div>
        <Link to={''}>
          <span className="d-block text-center">{courseNumber}.12631.202404</span>
          <span className="d-block text-center">{coursesSection}</span>
        </Link>
      </div>
      <button type="button" onClick={onRightButtonClick}>
        <FaAngleDown color="white"/>
      </button>
    </div>
  );
}
export default CompactHeader;