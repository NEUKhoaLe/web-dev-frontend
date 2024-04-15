import { Popover } from 'react-tiny-popover';
import { FaEllipsisV } from 'react-icons/fa';

function OptionsWithPopover(
  { isOpen, 
    isPublished,
    onClickOutside, 
    onClick, 
    onEdit, 
    onDelete, 
    onPublish, 
  }: 
  { isOpen: boolean, 
    isPublished: boolean,
    onClickOutside: () => void, 
    onClick: () => void, 
    onEdit: () => void, 
    onDelete: () => void, 
    onPublish: () => void }) 
  {
  return (
    <Popover
      isOpen={isOpen}
      positions={["bottom", "top", "left", "right"]}
      align="center"
      padding={8}
      onClickOutside={onClickOutside}
      content={(
        <div className="popover-content d-flex flex-column">
          <button className="popover-content-item" onClick={onEdit}>Edit</button>
          <button className="popover-content-item" onClick={onDelete}>Delete</button>
          <button className="popover-content-item" onClick={onPublish}>{isPublished ? "Unpublish" : "Publish"}</button>
        </div>
      )}
    >
      <button className="mx-3 clear-button" onClick={onClick} ><FaEllipsisV className="footer-icon"/></button>
    </Popover>
  );
}
export default OptionsWithPopover