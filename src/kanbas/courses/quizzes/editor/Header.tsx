import { FaBan, FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function Header(
  { isPublished, 
    quizPoints
  } : 
  { isPublished: boolean, 
    quizPoints: number, 
  }) 
{
  const publishButtonElements = (published: boolean) => {
    return published 
    ? (<><FaCheckCircle className="me-2 text-success"/><span style={{color: 'green'}}>Published</span></>) 
    : (<><FaBan className="me-2"/><span>Unpublished</span></>);
  }

  return (
    <div className="d-flex justify-content-end align-items-center my-2 mx-2">
      <div>
        <span className="me-2">Points: {quizPoints}</span>
      </div>
      <div className="ms-1 me-2 align-items-center">
        {publishButtonElements(isPublished)}
      </div>
      <button type="button" className="wd-modules-button mx-1 px-2">
        <FaEllipsisV/>
      </button>
    </div>
  )
}
export default Header;