import { useState } from "react";
import { NavbarIcon } from "../Icons";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="navbar">
        <h3>Travel log</h3>
        <button className="navbar-hamburger" onClick={()=>{setIsOpen(!isOpen)}}>
          <NavbarIcon />
        </button>
      </div>
      {<Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default Navbar;
