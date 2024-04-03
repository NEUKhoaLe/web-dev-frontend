import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CompactHeader from "./CompactHeader";
import CompactCourseNav from "../navigation/CompactCourseNav";
import CompactNav from "../../navigation/CompactNav";
import './index.css'

type BreadcrumbItem = {
  text: string;
  path: string;
};

const CourseHeader = ({ name, breadcrumbs }: { name: string; breadcrumbs: BreadcrumbItem[] }) => {
  const [compactNavVisible, setCompactNavVisible] = useState(false);
  const [compactCourseNavVisible, setCompactCourseNavVisible] = useState(false);
  return (
    <>
      <div className="top-bar d-none d-md-flex flex-row justify-content-between align-items-center pt-4 pe-3"
      style={{marginLeft: 24}}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <i className="pe-3"><HiMiniBars3 size={24}/></i>
            <li className="breadcrumb-item">
              <Link to=''>{name}</Link>
            </li>
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className={`breadcrumb-item${index === breadcrumbs.length - 1 ? ' active' : ''}`}>
                <Link to={breadcrumb.path}>{breadcrumb.text}</Link>
              </li>
            ))}
          </ol>
        </nav>
        <button type="button">Student View</button>
      </div>
      <CompactHeader 
      courseNumber={name} 
      coursesSection={breadcrumbs[breadcrumbs.length - 1].text}
      onLeftButtonClick={() => setCompactNavVisible(!compactNavVisible)}
      onRightButtonClick={() => setCompactCourseNavVisible(!compactCourseNavVisible)}/>
      {compactCourseNavVisible && <CompactCourseNav/>}
      {compactNavVisible && <CompactNav onClose={() => setCompactNavVisible(!compactNavVisible)}/>}
    </>
  );
};

export default CourseHeader