import { FaDownload, FaCloudDownloadAlt, FaCrosshairs, FaChartBar, FaBullhorn, FaBell, FaRegCalendarCheck } from "react-icons/fa"
import "./index.css"
import { Link } from "react-router-dom";

function Sidebar() {
  const buttonContents = [
    {
      icon: <FaDownload className="me-1"/>,
      text: "Import Existing Content"
    },
    {
      icon: <FaCloudDownloadAlt className="me-1"/>,
      text: "Import From Commons"
    },
    {
      icon: <FaCrosshairs className="me-1"/>,
      text: "Choose Home Page"
    },
    {
      icon: <FaChartBar className="me-1"/>,
      text: "View Course Stream"
    },
    {
      icon: <FaBullhorn className="me-1"/>,
      text: "New Announcement"
    },
    {
      icon: <FaChartBar className="me-1"/>,
      text: "New Analytics"
    },
    {
      icon: <FaBell className="me-1"/>,
      text: "View Course Notifications"
    },
  ];

  const upcomingEvents = [
    {
      type: "Lecture",
      course: "CS4550.12631.202410",
      date: "Sept 7 at 11:45am"
    },
    {
      type: "Lecture",
      course: "CS4550.12631.202410",
      date: "Sept 11 at 11:45am"
    },
    {
      type: "Lecture",
      course: "CS5610 06 SP23",
      date: "Sept 11 at 6:00pm"
    }
  ];
  return (
    <div className="flex-grow-0 me-2 d-none d-lg-block flex-column me-4" style={{width: 250, marginLeft: 60}}>
        <div className="mb-4 d-flex flex-column">
          {buttonContents.map((buttonContent) => (
            <button className="course-status-button">
              {buttonContent.icon}
              {buttonContent.text}
            </button>
          ))}
        </div>

        <div className="d-flex justify-content-between">
          <h4>Coming Up</h4>
          <div>
            <FaRegCalendarCheck className="me-1"/>
            <Link to={''} className="view-calendar">View Calendar</Link>
          </div>
        </div>
        <hr />
        <div>
          {upcomingEvents.map((event) => (
            <div className="d-block align-items-center mb-4">
              <FaRegCalendarCheck className="float-start" />
              <Link to={''} className="cal-event-text">{event.type}</Link>
              <span className="cal-event-text">{event.course}</span>
              <span className="cal-event-text">{event.date}</span>
            </div>
          ))}
          <Link to={''} className="d-block">12 more in the next week...</Link>
        </div>
      </div>
  );
}
export default Sidebar;
