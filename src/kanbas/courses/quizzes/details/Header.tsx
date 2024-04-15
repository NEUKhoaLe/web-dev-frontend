import { FaBan, FaCheckCircle, FaEllipsisV, FaPencilAlt } from "react-icons/fa";

function Header(
  { isPublished, 
    onPublish, 
    onPreview, 
    onEdit } : 
    { isPublished: boolean, 
      onPublish: () => void, 
      onPreview: () => void, 
      onEdit: () => void }) 
{
  const publishButtonElements = (published: boolean) => {
    return published 
    ? (<><FaCheckCircle className="me-2"/><span>Published</span></>) 
    : (<><FaBan className="me-2"/><span>Unpublished</span></>);
  }

  return (
    <div className="d-flex justify-content-end my-2 mx-2">
      <button 
      type="button" 
      className={`wd-modules-button mx-1 align-items-center${isPublished ? " green-button" : ""}`}
      onClick={onPublish}
      >
        {publishButtonElements(isPublished)}
      </button>
      <button type="button" className="wd-modules-button mx-1" onClick={onPreview}>Preview</button>
      <button type="button" className="wd-modules-button mx-1 align-items-center" onClick={onEdit}>
        <FaPencilAlt className="me-2"/><span>Edit</span>
      </button>
      <button type="button" className="wd-modules-button mx-1 px-2">
        <FaEllipsisV/>
      </button>
    </div>
  )
}
export default Header;