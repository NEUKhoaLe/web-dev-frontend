import { useEffect, useState } from "react";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { KanbasState } from "../../store";
import * as client from "./client";
import "./index.css";
import { Module } from "../../types";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const handleAddModule = () => {
    if (!courseId) return;
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    if (courseId) {
      client.findModulesForCourse(courseId)
        .then((modules) => {
          dispatch(setModules(modules))
          if (moduleList.length !== 0 && firstLoad) {
            setSelectedModule(moduleList[0])
            setFirstLoad(false)
          }
        });
    }
  }, [courseId, dispatch, firstLoad, moduleList]);


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
        <button type="button" className="wd-modules-button red-button mx-1">
          <FaPlus className="me-1"/> Module
        </button>
        <button type="button" className="wd-modules-button mx-1 px-2">
          <FaEllipsisV/>
        </button>
      </div>
      <hr />
      <div className="new-module-form d-flex flex-row mb-3">
        <div className="d-flex flex-column me-2">
          <input value={module.name}
            className="mb-2"
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))}/>
          <textarea value={module.description}
            onChange={(e) => 
              dispatch(setModule({ ...module, description: e.target.value }))}/>
        </div>
        <button style={{ maxHeight: 35 }} className="blue-button" 
        onClick={handleUpdateModule}>
          Update
          </button>
        <button 
        style={{ maxHeight: 35 }} className="green-button" 
        onClick={handleAddModule}>
          Add
          </button>
      </div>
      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div className="align-items-center d-flex justify-content-between">
              <span>
                <FaEllipsisV className="me-2" />
                {module.name}
              </span>
              <span>
                <button className="wd-modules-button red-button"
                  onClick={() => handleDeleteModule(module._id)}>
                  Delete
                </button>
                <button className="me-3 wd-modules-button green-button"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule?._id === module._id && (
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