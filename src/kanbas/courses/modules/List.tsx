import React, { useState } from "react";
import "./index.css";
import { modules } from "../../database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="flex-fill flex-column">
      <div className="d-flex justify-content-end my-2 mx-2">
        <button type="button" className="wd-modules-button mx-1">Collapse All</button>
        <button type="button" className="wd-modules-button mx-1">View Progress</button>
        <div className="wd-modules-button mx-1">
          <FaCheckCircle className="text-success me-1"/>
          <select id="publish-all">
            <option selected value="value1">Publish All</option>
            <option value="value2">value2</option>
            <option value="value3">value3</option>
            <option value="value4">value4</option>
          </select>
        </div>
        <button type="button" className="wd-modules-button module-button mx-1">
          <FaPlus className="me-1"/> Module
        </button>
        <button type="button" className="wd-modules-button mx-1 px-2">
          <FaEllipsisV/>
        </button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;