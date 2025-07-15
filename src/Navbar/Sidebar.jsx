import { Close } from "../Icons";

const Sidebar = ({isOpen,setIsOpen}) => {

  return (
    <div className={`sidebar-container ${isOpen ? "open" : " "}`}>
      <button className="sidebar-close-btn" onClick={()=>{setIsOpen(!isOpen)}}>
        <Close />
      </button>
      <div>
        <ul className="sidebar">
          <li>
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/">About</a>
          </li>
          <li>
            {" "}
            <a href="/">Contact</a>
          </li>
          <li>
            {" "}
            <a href="/">Places</a>
          </li>
        </ul>
      </div>
      ;
    </div>
  );
}

export default Sidebar;
