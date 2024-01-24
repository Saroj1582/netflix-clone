import { IoIosNotifications } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import "./navbar.css";
import { useState } from "react";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  };

  return (
    <div className={isScrolled ? "container scrolled" : "container"}>
      <div className="navbar">
        <div className="navLeft">
          <h2>NETFLIX</h2>
          <ul className="menu">
            <li>Series</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="navRight">
          <IoSearchOutline className="icon" />
          <input className="searchInput" type="text" />
          <span>KID</span>
          <div className="notification">
            <IoIosNotifications className="icon" />
            <span></span>
          </div>
          <img className="userImg" src="src/assets/user1.jpg" alt="" />
          <div className="profile">
            <IoMdArrowDropdown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
