import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../database";
import './index.css'

function CompactNav({ onClose }: { onClose: () => void }) {
  return (
    <ul className="compact-wd-kanbas-navigation">
        <li>
          <button className="float-end" type="button" onClick={onClose}>
            <FaTimes/><br />
          </button>
        </li>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={`/Kanbas/${link.label}`}>
              <span className="me-3">{link.icon}</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
  );
}
export default CompactNav