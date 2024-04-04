import { FaPlus, FaEllipsisV } from "react-icons/fa";

function Header() {
  return (
    <div className="d-flex flex-row justify-content-between">
      <input type="text" className="form-control" placeholder="Search for Quiz" style={{width: 300}}/>
      <div className="d-flex">
        <button type="button" className="wd-modules-button red-button mx-1">
          <FaPlus /> Quiz
        </button>
        <button type="button" className="wd-modules-button mx-1 px-2">
          <FaEllipsisV/>
        </button>
      </div>
    </div>
  );
}
export default Header