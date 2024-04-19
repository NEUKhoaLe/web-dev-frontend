import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './index.css';
import { FaKeyboard, FaCode, FaEllipsisV } from 'react-icons/fa';
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";

const RichTextEditor = ({ text, setText }: { text: string, setText: (text: string) => void }) => {

  return (
    <div>
      <div className='d-flex flex-row justify-content-left'>
        <button className='blank-button me-1'>Edit</button> 
        <button className='blank-button me-1'>View</button> 
        <button className='blank-button me-1'>Insert</button> 
        <button className='blank-button me-1'>Format</button> 
        <button className='blank-button me-1'>Tools</button> 
        <button className='blank-button me-1'>Table</button>
      </div>
      <ReactQuill value={text} onChange={setText}/>
      <div className="editor-footer">
        <div>p</div>
        <div>
          <button><FaKeyboard /></button>
          <span className="redify">{text.split(' ').length - 1} words</span>
          <button><FaCode /></button>
          <button><FaUpRightAndDownLeftFromCenter /></button>
          <span>
            <FaEllipsisV /><FaEllipsisV style={{marginLeft: -10}}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
