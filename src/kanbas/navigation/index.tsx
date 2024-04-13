import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { links } from "../database";
function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div className="d-flex" style={{minHeight: '100vh'}}>
      <ul className="wd-kanbas-navigation d-none d-md-block">
        <li><Link to="http://northeastern.edu"><img src={'/images/northeastern.jpg'} alt=""/></Link></li>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}> 
              <i className={link.label}>{link.icon}</i><br/>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;