import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaYoutubeSquare, FaShareSquare, FaQuestionCircle } from "react-icons/fa";
const links = [
  { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
  { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
  { label: "Courses",   icon: <FaBook className="fs-2" />           },
  { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
  { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
  { label: "History",  icon: <FaRegClock className="fs-2" /> },
  { label: "Studio",  icon: <FaYoutubeSquare className="fs-2" /> },
  { label: "Commons",  icon: <FaShareSquare className="fs-2" /> },
  { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> },
];
export default links;