import { IoIosPlay, IoMdAdd } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import "./listitem.css";
import { useState } from "react";

function ListItem({ index }) {
  const [isHover, setIsHover] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="listItem"
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHover && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="listItemInfo">
            <div className="listIcons">
              <IoIosPlay className="listIcon" />
              <IoMdAdd className="listIcon" />
              <AiOutlineLike className="listIcon" />
              <AiOutlineDislike className="listIcon" />
            </div>
            <div className="listItemDetail">
              <span>1 h 30 min</span>
              <span className="ageLimit ">+18</span>
              <span>2023</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              suscipit earum quaerat nihil delectus mollitia.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
